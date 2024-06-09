/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bny0fl2pzyftckt",
    "created": "2024-06-09 14:01:10.362Z",
    "updated": "2024-06-09 14:01:10.362Z",
    "name": "claimhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "m4fm8aoi",
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
        "id": "nuxt0hq3",
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
  const collection = dao.findCollectionByNameOrId("bny0fl2pzyftckt");

  return dao.deleteCollection(collection);
})
