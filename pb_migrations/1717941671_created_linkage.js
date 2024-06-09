/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yjfv73u2h3pf68b",
    "created": "2024-06-09 14:01:11.069Z",
    "updated": "2024-06-09 14:01:11.069Z",
    "name": "linkage",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "qbbgefxk",
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
        "id": "esryzwfr",
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
  const collection = dao.findCollectionByNameOrId("yjfv73u2h3pf68b");

  return dao.deleteCollection(collection);
})
