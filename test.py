import json

with open(r"data\grades.json", "r", encoding="utf8") as f:
    dct = json.load(f)

print(len(dct["students"]))
