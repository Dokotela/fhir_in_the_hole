/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tjqwf6w9fphx91u",
    "created": "2024-06-09 14:01:11.748Z",
    "updated": "2024-06-09 14:01:11.748Z",
    "name": "provenancehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "oi98wl49",
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
        "id": "edlrnayy",
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
  const collection = dao.findCollectionByNameOrId("tjqwf6w9fphx91u");

  return dao.deleteCollection(collection);
})
