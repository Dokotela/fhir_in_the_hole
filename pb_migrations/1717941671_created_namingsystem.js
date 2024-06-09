/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jvnqwhczynjrus0",
    "created": "2024-06-09 14:01:11.374Z",
    "updated": "2024-06-09 14:01:11.374Z",
    "name": "namingsystem",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "kglumpbl",
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
        "id": "fqdc7dmi",
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
  const collection = dao.findCollectionByNameOrId("jvnqwhczynjrus0");

  return dao.deleteCollection(collection);
})
