/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vkzwgkdfyz8thmj",
    "created": "2024-06-09 14:01:10.587Z",
    "updated": "2024-06-09 14:01:10.587Z",
    "name": "devicemetric",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ox2thz3u",
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
        "id": "zdm4kxpz",
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
  const collection = dao.findCollectionByNameOrId("vkzwgkdfyz8thmj");

  return dao.deleteCollection(collection);
})
