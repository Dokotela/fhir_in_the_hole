/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vlum4872ij7l9m9",
    "created": "2024-06-09 14:01:10.790Z",
    "updated": "2024-06-09 14:01:10.790Z",
    "name": "evidencevariablehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "k7haiihp",
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
        "id": "u26afynl",
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
  const collection = dao.findCollectionByNameOrId("vlum4872ij7l9m9");

  return dao.deleteCollection(collection);
})
