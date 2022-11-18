from flask import Flask
from random import seed
from random import randint


app = Flask(__name__)
seed(1)

@app.route('/')
def hello_world():
    content = randint(10000, 99999)
    return str(content)

if __name__ == '__main__':
     app.run(debug=True, host="0.0.0.0", port="4000")
 