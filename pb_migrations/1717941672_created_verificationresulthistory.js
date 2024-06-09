/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xstu0qrnpkn1kan",
    "created": "2024-06-09 14:01:12.403Z",
    "updated": "2024-06-09 14:01:12.403Z",
    "name": "verificationresulthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "x0z2nn5e",
        "name": "versionId",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "zjfws2vl",
        "name": "resource",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 5242880
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xstu0qrnpkn1kan");

  return dao.deleteCollection(collection);
})
