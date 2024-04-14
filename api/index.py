from fastapi import FastAPI

app = FastAPI()

@app.get("/api/python")
def hello_world():
    print("HIT!!")
    d = {"message": "Hello World"}
    print(d)
    return d
