/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hsolzbb0l6gjde5",
    "created": "2024-06-09 14:01:10.562Z",
    "updated": "2024-06-09 14:01:10.562Z",
    "name": "device",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "k6rrbbv9",
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
        "id": "delmkwuy",
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
  const collection = dao.findCollectionByNameOrId("hsolzbb0l6gjde5");

  return dao.deleteCollection(collection);
})
