/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "q9cpxs8qzouuc25",
    "created": "2024-06-09 14:01:11.427Z",
    "updated": "2024-06-09 14:01:11.427Z",
    "name": "observation",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "idcin98v",
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
        "id": "loof8z2f",
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
  const collection = dao.findCollectionByNameOrId("q9cpxs8qzouuc25");

  return dao.deleteCollection(collection);
})
