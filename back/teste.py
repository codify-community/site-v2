from utils.dbconnect import mongoConnect

cluster = mongoConnect()
db = cluster["discord"]
site = db["site"]

result = site.find_one({"_id": 1})
for i in ['admins', 'mods']:
    for e in result[i]:
        print(e)