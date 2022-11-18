FROM python:alpine3.10

WORKDIR /py

COPY ./.venv/requirements.txt ./requirements.txt

RUN pip install -r ./requirements.txt

COPY ./.venv ./


CMD ["python","app.py"]