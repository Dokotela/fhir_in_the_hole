/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nrmhsrkhdr171v9",
    "created": "2024-06-09 14:01:10.343Z",
    "updated": "2024-06-09 14:01:10.343Z",
    "name": "chargeitemdefinitionhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "xqxogkd2",
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
        "id": "n01gecye",
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
  const collection = dao.findCollectionByNameOrId("nrmhsrkhdr171v9");

  return dao.deleteCollection(collection);
})
