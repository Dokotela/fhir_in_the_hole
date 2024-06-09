/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "x35ibjp8kyr5wjq",
    "created": "2024-06-09 14:01:10.484Z",
    "updated": "2024-06-09 14:01:10.484Z",
    "name": "consenthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "vkgvme9c",
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
        "id": "ti3tquyn",
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
  const collection = dao.findCollectionByNameOrId("x35ibjp8kyr5wjq");

  return dao.deleteCollection(collection);
})
