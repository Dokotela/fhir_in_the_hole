/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5uvob1wa6y29gta",
    "created": "2024-06-09 14:01:10.611Z",
    "updated": "2024-06-09 14:01:10.611Z",
    "name": "deviceusestatement",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "jhwwnozb",
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
        "id": "k9vhya0y",
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
  const collection = dao.findCollectionByNameOrId("5uvob1wa6y29gta");

  return dao.deleteCollection(collection);
})
