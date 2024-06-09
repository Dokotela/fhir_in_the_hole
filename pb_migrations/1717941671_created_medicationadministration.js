/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "907bqm7rxzeoik7",
    "created": "2024-06-09 14:01:11.206Z",
    "updated": "2024-06-09 14:01:11.206Z",
    "name": "medicationadministration",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "lxlwnbu9",
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
        "id": "fbaw0zlw",
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
  const collection = dao.findCollectionByNameOrId("907bqm7rxzeoik7");

  return dao.deleteCollection(collection);
})
