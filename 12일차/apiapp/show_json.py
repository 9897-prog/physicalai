import json
# ↑ 딕셔너리를 보기 좋은 JSON 문자열로 출력하기 위한 라이브러리
import requests

URL="https://api.open-meteo.com/v1/forecast"
params = {
    "latitude": 37.55,
    "longitude": 127.0,
    "current": "temperature_2m,precipitation"
}
r= requests.get(URL, params=params, timeout=5)
data=r.json()
# ↑ 응답 본문(JSON 문자열)을 파이썬 딕셔너리로 변환
#   r.text는 문자열 그대로지만, r.json()은 바로 data["current"]처럼 키로 값을 꺼낼 수 있게 해줌

print("key        :", list(data.keys()))
# ↑ data 딕셔너리에 어떤 최상위 키들이 들어있는지 확인
print("current box:")
print(json.dumps(data["current"], indent=2))
# ↑ data["current"] 안에는 시각(time), 기온, 강수량 등이 들어있음
#   json.dumps(..., indent=2)로 들여쓰기를 적용해 읽기 좋게 출력
print("temperature: ", data["current"]["temperature_2m"],"C")
# ↑ current 딕셔너리 안에서 temperature_2m 값만 꺼내서 단위(C)와 함께 출력