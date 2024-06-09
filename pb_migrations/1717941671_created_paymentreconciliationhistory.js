/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6u21gout89pss6h",
    "created": "2024-06-09 14:01:11.626Z",
    "updated": "2024-06-09 14:01:11.626Z",
    "name": "paymentreconciliationhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "mgken6rw",
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
        "id": "0hpumyuy",
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
  const collection = dao.findCollectionByNameOrId("6u21gout89pss6h");

  return dao.deleteCollection(collection);
})
