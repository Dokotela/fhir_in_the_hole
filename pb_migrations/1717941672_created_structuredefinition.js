/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "w5qc8swtwh7uwem",
    "created": "2024-06-09 14:01:12.068Z",
    "updated": "2024-06-09 14:01:12.068Z",
    "name": "structuredefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "eaiukua3",
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
        "id": "vtlewipt",
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
  const collection = dao.findCollectionByNameOrId("w5qc8swtwh7uwem");

  return dao.deleteCollection(collection);
})
