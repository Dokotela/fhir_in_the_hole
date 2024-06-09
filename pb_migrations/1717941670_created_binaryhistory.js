/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "u1zt6bwt8hfnh3r",
    "created": "2024-06-09 14:01:10.234Z",
    "updated": "2024-06-09 14:01:10.234Z",
    "name": "binaryhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "mpcoosvv",
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
        "id": "lgs1lxn8",
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
  const collection = dao.findCollectionByNameOrId("u1zt6bwt8hfnh3r");

  return dao.deleteCollection(collection);
})
