import sys
import requests

GEO = "https://geocoding-api.open-meteo.com/v1/search"
FORECAST = "https://api.open-meteo.com/v1/forecast"
AIR = "https://air-quality-api.open-meteo.com/v1/air-quality"
TIMEOUT = 5
# ↑ 각 요청이 5초 넘게 응답 없으면 그 요청만 포기하고 다음으로 넘어감


def find_city(name):
    """도시 이름 -> (위도, 경도, 표시용 이름). 실패하면 None"""
    try:
    #↑ 이 블록 안에서 에러가 나면 프로그램이 멈추지 않고 except로 넘어가게 함
        r = requests.get(GEO, params={"name": name, "count": 1}, timeout=TIMEOUT)
        r.raise_for_status()
        # ↑ 응답 상태 코드가 400/500대(에러)면 강제로 예외를 발생시킴
        # (에러 응답이 와도 조용히 넘어가는데, 이 줄이 있어야 에러를 바로 알아챌 수 있음)
        results = r.json().get("results")
        if not results:
            return None
        hit = results[0]
        label = hit["name"] + ", " + hit["country_code"]
        return hit["latitude"], hit["longitude"], label
    except requests.exceptions.RequestException:
    #↑ 위 try 블록에서 네트워크 관련 에러(타임아웃, 연결 끊김 등)가 나면 여기로 옴
        return None
        # ↑ 에러가 나도 프로그램이 멈추지 않고, "실패했다"는 표시로 None을 돌려줌


def get_weather(lat, lon):
    """(기온, 강수확률) -> 실패하면 (None, None)"""
    try:
        params = {
            "latitude": lat,
            "longitude": lon,
            "current": "temperature_2m",
            "hourly": "precipitation_probability",
            "forecast_days": 1,
        }
        data = requests.get(FORECAST, params=params, timeout=TIMEOUT).json()
        temp = data["current"]["temperature_2m"]
        rain = data["hourly"]["precipitation_probability"][0]
        return temp, rain
    except requests.exceptions.RequestException:
        return None, None


def get_pm25(lat, lon):
    """PM2.5 -> 실패하면 None"""
    try:
        params = {"latitude": lat, "longitude": lon, "current": "pm2_5"}
        data = requests.get(AIR, params=params, timeout=TIMEOUT).json()
        return data["current"]["pm2_5"]
    except requests.exceptions.RequestException:
        return None


def judge(temp, rain, pm25):
    """기온/강수확률/PM2.5를 종합해서 외출 판정 한 줄을 만듦"""
    reasons = []
    level = 0
    # ↑ 0=좋음, 1=주의, 2=비권장. 셋 중 가장 나쁜 값으로 최종 판정

    if rain is not None:
        if rain >= 70:
            level = max(level, 2)
            reasons.append("비 올 확률 높음")
        elif rain >= 40:
            level = max(level, 1)
            reasons.append("비 올 수도 있음")

    if pm25 is not None:
        if pm25 > 35:
            level = max(level, 2)
            reasons.append("미세먼지 나쁨")
        elif pm25 > 15:
            level = max(level, 1)
            reasons.append("미세먼지 보통")

    if temp is not None:
        if temp <= -5 or temp >= 35:
            level = max(level, 2)
            reasons.append("기온 극단적")
        elif temp <= 0 or temp >= 30:
            level = max(level, 1)
            reasons.append("기온 부담")

    if not reasons:
        reasons.append("데이터 부족")

    verdict = ["외출 좋음", "외출 주의", "외출 비권장"][level]
    return verdict + " (" + ", ".join(reasons) + ")"


def main():
    city = sys.argv[1] if len(sys.argv) > 1 else "Seoul"
    # 실행할 때 도시 이름을 넘겼으면 그 값을, 안 넘겼으면 "Seoul"을 기본값으로 사용

    found = find_city(city)
    if found is None:
        print("city       :", city)
        print("error      : 도시를 찾지 못했습니다 (검색 실패 또는 응답 없음)")
        return

    lat, lon, label = found
    temp, rain = get_weather(lat, lon)
    pm25 = get_pm25(lat, lon)

    print("city       :", label)
    print("temperature:", temp if temp is not None else "정보 없음", "C")
    #temp 값이 있으면 그 값을, 없으면(None이면) "정보 없음"이라는 글자를 출력
    print("rain chance:", rain if rain is not None else "정보 없음", "%")
    print("pm2.5      :", pm25 if pm25 is not None else "정보 없음", "ug/m3")
    print("verdict    :", judge(temp, rain, pm25))
    #↑ 세 값을 judge()에 넘겨서 만든 종합 판정 문장을 출력


if __name__ == "__main__":
#↑ 이 파일을 "직접" 실행했을 때만 아래 main()을 호출하라는 뜻
    main()

# 손코딩은 작성자의 실력향상과 이해도를 높이기 위한 핵심로직을 익히기 위한게 우선.
# (API호출 >> 값 꺼내기 >> 출력)
# 둘다 API가 정상 응답할때만 결과값은 같지만, 정상응답하지 않을때는 결과값이 달라짐.

# 비유 : timeout "전화 안 받으면 5초까지만 기다려"  
#      : try/except "5초 기다려도 안 받으면 통화 실패라고 기록하고 다음 사람한테 전화 걸어"