/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ygl765jaj819brq",
    "created": "2024-06-09 14:01:11.602Z",
    "updated": "2024-06-09 14:01:11.602Z",
    "name": "paymentnotice",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "c8a8iycs",
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
        "id": "cqepo91w",
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
  const collection = dao.findCollectionByNameOrId("ygl765jaj819brq");

  return dao.deleteCollection(collection);
})
