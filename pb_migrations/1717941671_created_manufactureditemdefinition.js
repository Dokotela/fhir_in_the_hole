/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "no30fuqkaois5vw",
    "created": "2024-06-09 14:01:11.128Z",
    "updated": "2024-06-09 14:01:11.128Z",
    "name": "manufactureditemdefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "nnlseen2",
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
        "id": "tg2uukpu",
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
  const collection = dao.findCollectionByNameOrId("no30fuqkaois5vw");

  return dao.deleteCollection(collection);
})
