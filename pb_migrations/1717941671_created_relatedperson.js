/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "68xok6x4fvbda63",
    "created": "2024-06-09 14:01:11.810Z",
    "updated": "2024-06-09 14:01:11.810Z",
    "name": "relatedperson",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "tzwqgkra",
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
        "id": "siqisgay",
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
  const collection = dao.findCollectionByNameOrId("68xok6x4fvbda63");

  return dao.deleteCollection(collection);
})
