/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "09ob6pan73h98p4",
    "created": "2024-06-09 14:01:10.268Z",
    "updated": "2024-06-09 14:01:10.268Z",
    "name": "bundlehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "8cgarqvp",
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
        "id": "pml8lv1b",
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
  const collection = dao.findCollectionByNameOrId("09ob6pan73h98p4");

  return dao.deleteCollection(collection);
})
