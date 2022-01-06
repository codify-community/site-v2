import flask
from utils.dbconnect import mongoConnect

cluster = mongoConnect()
db = cluster["discord"]
site = db["site"]
conta = db["conta"]

app = flask.Flask(__name__)

@app.route('/api/home')
def staff():
    obj = {}
    obj['cards'] = site.find_one({"_id": 0})['cards']
    obj['info'] = site.find_one({"_id": 0})['info']
    return obj

@app.route('/api/ranking')
def ranking():
    obj = {}
    obj['ranking'] = conta.find().sort("xp", -1)[:10]
    return obj