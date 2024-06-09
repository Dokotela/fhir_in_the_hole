/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i3g25auxiy8oiue",
    "created": "2024-06-09 14:01:11.783Z",
    "updated": "2024-06-09 14:01:11.783Z",
    "name": "questionnaireresponsehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "kf4077zq",
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
        "id": "dtftns6p",
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
  const collection = dao.findCollectionByNameOrId("i3g25auxiy8oiue");

  return dao.deleteCollection(collection);
})
