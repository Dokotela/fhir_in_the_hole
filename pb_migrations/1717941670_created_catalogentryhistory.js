/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j7tu7p7ezgpngcj",
    "created": "2024-06-09 14:01:10.321Z",
    "updated": "2024-06-09 14:01:10.321Z",
    "name": "catalogentryhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "x7ebkxmz",
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
        "id": "auobaedg",
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
  const collection = dao.findCollectionByNameOrId("j7tu7p7ezgpngcj");

  return dao.deleteCollection(collection);
})
