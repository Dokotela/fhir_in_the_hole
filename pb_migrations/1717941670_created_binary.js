/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dhdx5nniha1c6r9",
    "created": "2024-06-09 14:01:10.228Z",
    "updated": "2024-06-09 14:01:10.228Z",
    "name": "binary",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "sszryigb",
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
        "id": "sbcv08a5",
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
  const collection = dao.findCollectionByNameOrId("dhdx5nniha1c6r9");

  return dao.deleteCollection(collection);
})
