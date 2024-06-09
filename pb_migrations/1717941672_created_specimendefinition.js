/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "05e1ms3tquifw3b",
    "created": "2024-06-09 14:01:12.050Z",
    "updated": "2024-06-09 14:01:12.050Z",
    "name": "specimendefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "jevrrj2f",
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
        "id": "ouqj9ueh",
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
  const collection = dao.findCollectionByNameOrId("05e1ms3tquifw3b");

  return dao.deleteCollection(collection);
})
