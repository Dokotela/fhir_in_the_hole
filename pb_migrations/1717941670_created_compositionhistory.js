/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lyd5tuxh3qqr2dx",
    "created": "2024-06-09 14:01:10.453Z",
    "updated": "2024-06-09 14:01:10.453Z",
    "name": "compositionhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ybvhue4l",
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
        "id": "blssnsma",
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
  const collection = dao.findCollectionByNameOrId("lyd5tuxh3qqr2dx");

  return dao.deleteCollection(collection);
})
