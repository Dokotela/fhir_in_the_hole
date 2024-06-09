/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y77fdcy4j50rc0u",
    "created": "2024-06-09 14:01:11.253Z",
    "updated": "2024-06-09 14:01:11.253Z",
    "name": "medicationknowledgehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ayczpstb",
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
        "id": "ytae85oo",
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
  const collection = dao.findCollectionByNameOrId("y77fdcy4j50rc0u");

  return dao.deleteCollection(collection);
})
