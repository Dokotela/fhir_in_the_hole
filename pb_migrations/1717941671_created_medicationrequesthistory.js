/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "g9h7rxsywyna25s",
    "created": "2024-06-09 14:01:11.272Z",
    "updated": "2024-06-09 14:01:11.272Z",
    "name": "medicationrequesthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "fxnsq2oc",
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
        "id": "adzibpjs",
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
  const collection = dao.findCollectionByNameOrId("g9h7rxsywyna25s");

  return dao.deleteCollection(collection);
})
