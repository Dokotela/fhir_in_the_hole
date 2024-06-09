/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3zgyp0lx0invu6u",
    "created": "2024-06-09 14:01:10.767Z",
    "updated": "2024-06-09 14:01:10.767Z",
    "name": "evidencereport",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "p6ixa9te",
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
        "id": "dic881wf",
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
  const collection = dao.findCollectionByNameOrId("3zgyp0lx0invu6u");

  return dao.deleteCollection(collection);
})
