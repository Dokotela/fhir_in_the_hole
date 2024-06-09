/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1hjup3b0k2wca0d",
    "created": "2024-06-09 14:01:11.151Z",
    "updated": "2024-06-09 14:01:11.151Z",
    "name": "measurehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "j7pkyonr",
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
        "id": "mzhplnqt",
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
  const collection = dao.findCollectionByNameOrId("1hjup3b0k2wca0d");

  return dao.deleteCollection(collection);
})
