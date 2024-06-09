/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "iqn8c9212fj8cwr",
    "created": "2024-06-09 14:01:12.276Z",
    "updated": "2024-06-09 14:01:12.276Z",
    "name": "task",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "s9rsq7ac",
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
        "id": "hanglm3l",
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
  const collection = dao.findCollectionByNameOrId("iqn8c9212fj8cwr");

  return dao.deleteCollection(collection);
})
