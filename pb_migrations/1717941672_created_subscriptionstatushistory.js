/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4il8amchk4t5wvp",
    "created": "2024-06-09 14:01:12.142Z",
    "updated": "2024-06-09 14:01:12.142Z",
    "name": "subscriptionstatushistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "irfuy7cf",
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
        "id": "dz6n9wki",
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
  const collection = dao.findCollectionByNameOrId("4il8amchk4t5wvp");

  return dao.deleteCollection(collection);
})
