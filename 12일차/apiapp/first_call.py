import requests
# ↑HTTP 요청을 보내기 위한 라이브러리
URL = "https://api.open-meteo.com/v1/forecast"
# ↑Open-meteo(오픈소스 날씨 API)의 예보 조회 엔드포인트 URL
params={
    "latitude":37.55,        #위도 (서울기준, 북위37.55도)
    "longitude":127.0,       #경도 (동경 127.0도)
    "current": "temperature_2m,precipitation"
    # ↑ 현재 시각 기준으로 받아올 항목 지정
    # - temperature_2m : 지상 2m 높이의 기온
    # - precipitation  : 강수량
}
   
# GET 요청 보내기 (변수)
# - params에 담긴 값들이 URL 뒤에 쿼리스트링으로 자동 변환됨
# - timeout=5 : 5초 안에 응답이 없으면 예외 발생 (무한 대기 방지)
r = requests.get(URL, params=params, timeout=5)

print("status code :", r.status_code)  # HTTP 상태 코드 (200이면 정상 응답)
print("ok?         :", r.ok)           # 상태 코드가 200~399면 True
print("first 60 ch :", r.text[:60])    # 응답 본문(JSON 문자열)의 앞 60글자만 미리보기


