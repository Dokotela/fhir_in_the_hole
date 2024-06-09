/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fgkm56j2g5eg4zz",
    "created": "2024-06-09 14:01:11.839Z",
    "updated": "2024-06-09 14:01:11.839Z",
    "name": "requestgroup",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "d6sukh2y",
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
        "id": "yl9jdvri",
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
  const collection = dao.findCollectionByNameOrId("fgkm56j2g5eg4zz");

  return dao.deleteCollection(collection);
})
