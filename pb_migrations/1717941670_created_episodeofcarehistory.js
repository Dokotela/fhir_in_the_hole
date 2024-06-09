/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dxfw13586y7y50c",
    "created": "2024-06-09 14:01:10.717Z",
    "updated": "2024-06-09 14:01:10.717Z",
    "name": "episodeofcarehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "qsevicww",
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
        "id": "z9gqzkiv",
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
  const collection = dao.findCollectionByNameOrId("dxfw13586y7y50c");

  return dao.deleteCollection(collection);
})
