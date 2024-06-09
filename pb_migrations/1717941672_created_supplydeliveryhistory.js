/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ode1etf18xkda7y",
    "created": "2024-06-09 14:01:12.244Z",
    "updated": "2024-06-09 14:01:12.244Z",
    "name": "supplydeliveryhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "mzc4xws0",
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
        "id": "dtlcwbjr",
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
  const collection = dao.findCollectionByNameOrId("ode1etf18xkda7y");

  return dao.deleteCollection(collection);
})
