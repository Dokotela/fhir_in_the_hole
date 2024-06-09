/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2znkxvaswx9joec",
    "created": "2024-06-09 14:01:10.291Z",
    "updated": "2024-06-09 14:01:10.291Z",
    "name": "careplan",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "b8uucfow",
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
        "id": "n7m2fcu8",
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
  const collection = dao.findCollectionByNameOrId("2znkxvaswx9joec");

  return dao.deleteCollection(collection);
})
