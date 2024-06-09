/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "s1eoayxnes7zris",
    "created": "2024-06-09 14:01:10.843Z",
    "updated": "2024-06-09 14:01:10.843Z",
    "name": "flag",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ineqbs5y",
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
        "id": "kzg6kymz",
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
  const collection = dao.findCollectionByNameOrId("s1eoayxnes7zris");

  return dao.deleteCollection(collection);
})
