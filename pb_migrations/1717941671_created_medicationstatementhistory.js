/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "m4rdhqoi2fq8ym2",
    "created": "2024-06-09 14:01:11.293Z",
    "updated": "2024-06-09 14:01:11.293Z",
    "name": "medicationstatementhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "bprsvepg",
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
        "id": "zhcijtmm",
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
  const collection = dao.findCollectionByNameOrId("m4rdhqoi2fq8ym2");

  return dao.deleteCollection(collection);
})
