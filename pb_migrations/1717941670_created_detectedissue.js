/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "h0gw0srwzhzykq4",
    "created": "2024-06-09 14:01:10.551Z",
    "updated": "2024-06-09 14:01:10.551Z",
    "name": "detectedissue",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "bzqcedgn",
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
        "id": "bj9bjojh",
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
  const collection = dao.findCollectionByNameOrId("h0gw0srwzhzykq4");

  return dao.deleteCollection(collection);
})
