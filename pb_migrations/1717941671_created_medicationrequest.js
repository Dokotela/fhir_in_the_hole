/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7atq6776xlxwa0p",
    "created": "2024-06-09 14:01:11.261Z",
    "updated": "2024-06-09 14:01:11.261Z",
    "name": "medicationrequest",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "nvvudlrq",
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
        "id": "uu2wmgli",
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
  const collection = dao.findCollectionByNameOrId("7atq6776xlxwa0p");

  return dao.deleteCollection(collection);
})
