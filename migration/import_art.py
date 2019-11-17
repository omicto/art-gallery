from pymongo import MongoClient
import json
from pathlib import Path


path = str(Path(__file__).parent.absolute()) + "/json/"
paths = {
    "artists": path + "artists.json",
    "customers": path + "customers.json",
    "transactions": path + "transactions.json",
    "works": path + "works.json"
}


def remove_trailing_space(dictionary):
    for key in dictionary:
        if isinstance(dictionary[key], str):
            dictionary[key] = str.strip(dictionary[key])
    return dictionary


def insert_json(file, collection_name, database_name):
    client = MongoClient('localhost', 27017)

    db = client[database_name]
    collection = db[collection_name]

    json_object = None

    with open(file, 'r') as jf:
        json_object = json.load(jf)

    for document in json_object:
        document = remove_trailing_space(document)
        collection.insert_one(document)

def embed_works():
    client = MongoClient('localhost', 27017)
    db = client.art_gallery
    artists = db.artists

    with open(paths["works"], 'r') as jf:
        json_object = json.load(jf)

        for work in json_object:
            work = remove_trailing_space(work)
            artist_id = work["artistid"]
            del work["artistid"]
            artists.find_one_and_update({"artistid": artist_id}, {
                                        "$push": {"works": work}})


def main():
    client = MongoClient('localhost', 27017)
    client.drop_database("art_gallery")
    for doc in ["artists", "transactions", "customers"]:
        insert_json(paths[doc], doc, "art_gallery")
    embed_works()


if __name__ == "__main__":
    main()
