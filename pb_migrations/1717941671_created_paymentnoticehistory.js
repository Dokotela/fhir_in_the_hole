/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "m500sx2qarbaag5",
    "created": "2024-06-09 14:01:11.609Z",
    "updated": "2024-06-09 14:01:11.609Z",
    "name": "paymentnoticehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "4xtnmeav",
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
        "id": "dasraw3b",
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
  const collection = dao.findCollectionByNameOrId("m500sx2qarbaag5");

  return dao.deleteCollection(collection);
})
