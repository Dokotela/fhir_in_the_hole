/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8i8pdmznhogm4cd",
    "created": "2024-06-09 14:01:11.355Z",
    "updated": "2024-06-09 14:01:11.355Z",
    "name": "molecularsequence",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "u3pkfnan",
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
        "id": "wkm8jedm",
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
  const collection = dao.findCollectionByNameOrId("8i8pdmznhogm4cd");

  return dao.deleteCollection(collection);
})
