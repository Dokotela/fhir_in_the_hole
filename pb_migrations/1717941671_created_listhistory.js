/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "d1ktp7y4qg6rrfl",
    "created": "2024-06-09 14:01:11.101Z",
    "updated": "2024-06-09 14:01:11.101Z",
    "name": "listhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "7c3mr8zb",
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
        "id": "fyaldsfe",
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
  const collection = dao.findCollectionByNameOrId("d1ktp7y4qg6rrfl");

  return dao.deleteCollection(collection);
})
