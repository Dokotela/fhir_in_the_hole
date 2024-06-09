/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sqpycahzn6r9t1z",
    "created": "2024-06-09 14:01:11.997Z",
    "updated": "2024-06-09 14:01:11.997Z",
    "name": "servicerequest",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "tdgbdwp4",
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
        "id": "mz03bvqm",
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
  const collection = dao.findCollectionByNameOrId("sqpycahzn6r9t1z");

  return dao.deleteCollection(collection);
})
