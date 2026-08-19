import sys
import requests

GEO="https://geocoding-api.open-meteo.com/v1/search"
AIR="https://air-quality-api.open-meteo.com/v1/air-quality"
# 대기질을 알려주는 별도의 API주소
TIMEOUT = 5

def find_city(name):
    r=requests.get(GEO, params={"name": name, "count":1}, timeout=TIMEOUT)
    hit=r.json()["results"][0]
    label = hit["name"] + ", " + hit["country_code"]
    #이름과 국가코드를 하나의 문자열로 합쳐서 라벨 생성
    return hit["latitude"], hit["longitude"], label
    #받는쪽과 갯수를 맞춤

city=sys.argv[1] if len(sys.argv) > 1 else "Seoul"
lat, lon, label = find_city(city)

params = {"latitude": lat, "longitude": lon, "current": "pm2_5,pm10"}
#pm2_5, pm10 : 초미세먼지, 미세먼지 농도를 요청
cur = requests.get(AIR, params=params, timeout=TIMEOUT).json()["current"]
#json 변환 > current 키 꺼내기를 한줄로

pm25 = cur["pm2_5"]
grade="GOOD" if pm25 <= 15 else ("CAUTION" if pm25 <= 35 else "BAD")
#두번 겹친 (중첩 조건식)
# pm25가 15이하면 GOOD
# 아니면 다시 확인해서 35이하면 CAUTION
# 그것도 아니면 35초과 BAD

print("city      :", label)
print("pm2.5     :", pm25, "ug/m3")
print("pm10      :", cur["pm10"], "ug/m3")
print("grade     :", grade)