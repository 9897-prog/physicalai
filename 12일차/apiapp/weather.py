import sys
# ↑ 프로그램 실행할 때 넘긴 값(명령줄 인자)을 읽기 위한 라이브러리
#   예: python first_call.py Busan → "Busan"이라는 값을 코드에서 읽을 수 있게 해줌
import requests

GEO="https://geocoding-api.open-meteo.com/v1/search"
# ↑ "도시 이름"을 "위도/경도"로 변환해주는 검색 API 주소
FORECAST="https://api.open-meteo.com/v1/forecast"
# ↑ 위도/경도를 넣으면 날씨를 알려주는 API 주소
TIMEOUT = 5
# ↑ 5초로 고정된 타임아웃 값을 변수로 빼둔 것
#   나중에 여러 requests.get()에서 timeout=TIMEOUT으로 재사용

def find_city(name):
    """도시 이름 -> (위도, 경도, 표시용 이름)"""
    # ↑ 이 함수가 뭘 받아서 뭘 돌려주는지 요약해둔 설명(docstring)
    r = requests.get(GEO, params={"name":name, "count":1}, timeout=TIMEOUT)
    # ↑ GEO 주소에 "이 이름으로 도시 찾아줘(name), 결과는 1개만(count:1)" 요청
    hit = r.json()["results"][0]
    # ↑ 응답 안의 "results"는 검색된 도시 목록(리스트)
    #   여러 개가 검색될 수 있어서 리스트 형태인데, 그중 첫 번째([0]) 결과만 사용
    label = hit["name"] + ", " + hit["country_code"]
    # ↑ "도시명, 국가코드" 형태의 문자열을 만듦 (예: "Seoul, KR")
    #   화면에 출력할 때 보기 좋게 쓰려고 미리 만들어두는 것
    return hit["latitude"], hit["longitude"], label
    # ↑ 위도, 경도, 표시용 이름 세 가지를 한꺼번에 돌려줌
    # 호출하는 쪽에서는 세 변수의 나눠서 받음

city = sys.argv[1] if len (sys.argv) > 1 else "Seoul"
# ↑ 실행할 때 도시 이름을 넘겼으면 그 값을 쓰고(sys.argv[1]),
#   안 넘겼으면(len(sys.argv) > 1이 거짓) 기본값 "Seoul"을 씀
#   예: "python first_call.py Busan" → city는 "Busan"
#       "python first_call.py"      → city는 "Seoul
lat, lon, label = find_city(city)
#위에서 만든 함수를 호출해서 위도/경도/표시이름을 한 번에 받음

params = {
    "latitude": lat,
    "longitude": lon,
    "current": "temperature_2m",
    "hourly": "precipitation_probability",
     # ↑ hourly는 "시간대별" 데이터를 요청하는 항목
    #   여기서는 시간별 "강수 확률(precipitation_probability)"을 요청
    "forecast_days":1,
    # ↑ 예보를 며칠치 받을지 지정 (1이면 오늘 하루치만)
}
r= requests.get(FORECAST, params=params, timeout=TIMEOUT)
data=r.json()

temp=data["current"]["temperature_2m"]
# ↑ 현재 기온
rain=data["hourly"]["precipitation_probability"][0]
# ↑ hourly로 요청하면 시간대별 값이 리스트로 옴 (예: 24시간이면 24개짜리 리스트)
# [0]은 그 리스트의 첫 번째 시간(가장 이른 시간)의 강수 확률 값을 꺼낸다는 뜻
print("city       :", label)
print("temperature:", temp, "C")
print("rain chance:", rain, "%")
