/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "itdbiexw21i0yhr",
    "created": "2024-06-09 14:01:11.243Z",
    "updated": "2024-06-09 14:01:11.243Z",
    "name": "medicationknowledge",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "rjxoo4ak",
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
        "id": "s4yua5kd",
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
  const collection = dao.findCollectionByNameOrId("itdbiexw21i0yhr");

  return dao.deleteCollection(collection);
})
