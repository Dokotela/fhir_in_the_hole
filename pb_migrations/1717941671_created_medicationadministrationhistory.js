/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7ybw0vvw9uw75r6",
    "created": "2024-06-09 14:01:11.215Z",
    "updated": "2024-06-09 14:01:11.215Z",
    "name": "medicationadministrationhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "8knrma2x",
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
        "id": "zfzq3ajl",
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
  const collection = dao.findCollectionByNameOrId("7ybw0vvw9uw75r6");

  return dao.deleteCollection(collection);
})
