/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bg9cdh11c27hayz",
    "created": "2024-06-09 14:01:11.862Z",
    "updated": "2024-06-09 14:01:11.862Z",
    "name": "researchdefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "nz2hbbnv",
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
        "id": "kbaoxriv",
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
  const collection = dao.findCollectionByNameOrId("bg9cdh11c27hayz");

  return dao.deleteCollection(collection);
})
