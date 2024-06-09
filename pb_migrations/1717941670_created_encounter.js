/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2f7uv4qnu0oky0h",
    "created": "2024-06-09 14:01:10.660Z",
    "updated": "2024-06-09 14:01:10.660Z",
    "name": "encounter",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "urlddnxp",
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
        "id": "j7zizwpo",
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
  const collection = dao.findCollectionByNameOrId("2f7uv4qnu0oky0h");

  return dao.deleteCollection(collection);
})
