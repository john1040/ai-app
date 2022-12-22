from enum import Enum

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
# Set the API endpoint URL
endpoint = "https://api.runpod.ai/v1/stable-diffusion-v1/run"


class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# @app.get("/models/{model_name}")
# async def get_model(model_name: ModelName):
#     if model_name is ModelName.alexnet:
#         return {"model_name": model_name, "message": "Deep Learning FTW!"}

#     if model_name.value == "lenet":
#         return {"model_name": model_name, "message": "LeCNN all the images"}

#     return {"model_name": model_name, "message": "Have some residuals"}
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer PGLUYGK5CL1T5RYYADQASVRHYC8XCAAWJUZQL75O"
}


@app.post("/sd/")
async def run(prompt: str):

    # Define your inputs
    input_data = {
        "input": {
            "prompt": prompt
        }
    }

# Make the request
    response = requests.post(endpoint, json=input_data, headers=headers)
    return response.json()


@app.get("/sd/")
async def get_result(request_id):
    response = requests.get(
        "https://api.runpod.ai/v1/stable-diffusion-v1/run/"+request_id, headers=headers)
    return response.json()


@app.get("/sd/test/")
async def test(prompt: str):
    # Define your inputs
    input_data = {
        "input": {
            "prompt": prompt
        }
    }

# Make the request
    response = requests.post(endpoint, json=input_data, headers=headers)
    request_id = response.json()['id']
    get_response = requests.get(
        "https://api.runpod.ai/v1/stable-diffusion-v1/run/"+request_id, headers=headers)
    return get_response.json()
