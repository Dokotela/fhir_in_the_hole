/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "a3ijsukkyb5z2ic",
    "created": "2024-06-09 14:01:10.879Z",
    "updated": "2024-06-09 14:01:10.879Z",
    "name": "graphdefinitionhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "oiq1nsv3",
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
        "id": "k9v74x8z",
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
  const collection = dao.findCollectionByNameOrId("a3ijsukkyb5z2ic");

  return dao.deleteCollection(collection);
})
