/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kx9beu0lh2glarl",
    "created": "2024-06-09 14:01:10.353Z",
    "updated": "2024-06-09 14:01:10.353Z",
    "name": "citationhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "cqlqdlij",
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
        "id": "bth8uhfv",
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
  const collection = dao.findCollectionByNameOrId("kx9beu0lh2glarl");

  return dao.deleteCollection(collection);
})
