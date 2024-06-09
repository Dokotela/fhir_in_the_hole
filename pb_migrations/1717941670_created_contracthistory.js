/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ot4iplv82kdk2t1",
    "created": "2024-06-09 14:01:10.498Z",
    "updated": "2024-06-09 14:01:10.498Z",
    "name": "contracthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "xcf8lj1k",
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
        "id": "relhgggd",
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
  const collection = dao.findCollectionByNameOrId("ot4iplv82kdk2t1");

  return dao.deleteCollection(collection);
})
