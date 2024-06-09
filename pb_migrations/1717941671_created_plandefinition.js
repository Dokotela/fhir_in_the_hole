/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qkzm6bb7g9hxfqg",
    "created": "2024-06-09 14:01:11.655Z",
    "updated": "2024-06-09 14:01:11.655Z",
    "name": "plandefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "plldb6hq",
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
        "id": "empdican",
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
  const collection = dao.findCollectionByNameOrId("qkzm6bb7g9hxfqg");

  return dao.deleteCollection(collection);
})
