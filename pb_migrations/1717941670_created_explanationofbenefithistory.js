/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "balesvryu9qt0k3",
    "created": "2024-06-09 14:01:10.820Z",
    "updated": "2024-06-09 14:01:10.820Z",
    "name": "explanationofbenefithistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "qmhuxf3k",
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
        "id": "f3pf0rm4",
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
  const collection = dao.findCollectionByNameOrId("balesvryu9qt0k3");

  return dao.deleteCollection(collection);
})
