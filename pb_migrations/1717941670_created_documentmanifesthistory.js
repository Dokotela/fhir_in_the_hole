/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "uwk1n48wgmro1ln",
    "created": "2024-06-09 14:01:10.642Z",
    "updated": "2024-06-09 14:01:10.642Z",
    "name": "documentmanifesthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "pg266k9l",
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
        "id": "wrtowluf",
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
  const collection = dao.findCollectionByNameOrId("uwk1n48wgmro1ln");

  return dao.deleteCollection(collection);
})
