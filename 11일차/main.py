from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

memos = []


class Memo(BaseModel):
    content: str


@app.get("/")
def read_root():
    return "안녕하세요"


@app.post("/memos")
def create_memo(memo: Memo):
    memos.append(memo)
    return memo


@app.get("/memos")
def list_memos():
    return memos
