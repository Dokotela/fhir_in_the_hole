/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "h0upop9aj5tm1b7",
    "created": "2024-06-09 14:01:10.622Z",
    "updated": "2024-06-09 14:01:10.622Z",
    "name": "diagnosticreport",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "qccngcim",
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
        "id": "76vza5my",
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
  const collection = dao.findCollectionByNameOrId("h0upop9aj5tm1b7");

  return dao.deleteCollection(collection);
})
