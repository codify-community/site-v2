import flask
from flask_cors import CORS
from utils.dbconnect import mongoConnect


cluster = mongoConnect()
db = cluster["discord"]
site = db["site"]
conta = db["conta"]

app = flask.Flask(__name__)
CORS(app)

@app.route('/api/home', methods=['GET'])
def staff():
    obj = {}
    result = site.find_one({"_id": 1})
    obj['staff'] = []
    obj['staff'].append(result['dono'])
    for i in ['admins', 'mods']:
        for e in result[i]:
            obj['staff'].append(e)
    obj['booster'] = result['boosters']
    obj['info'] = {}
    obj['info']['channel_count'] = (result['channel_count'])
    obj['info']['member_count'] = (result['member_count'])
    obj['info']['staff_count'] = (len(obj['staff']))
    return obj

@app.route('/api/ranking')
def ranking():
    obj = {}
    obj['ranking'] = conta.find().sort("xp", -1)[:10]
    return obj
#run on port 5000
app.run(port=5000)