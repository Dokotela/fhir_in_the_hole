/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ybc8tdpqnbthdex",
    "created": "2024-06-09 14:01:10.930Z",
    "updated": "2024-06-09 14:01:10.930Z",
    "name": "imagingstudy",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "dclvweob",
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
        "id": "ws19uq12",
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
  const collection = dao.findCollectionByNameOrId("ybc8tdpqnbthdex");

  return dao.deleteCollection(collection);
})
