/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "say0e2dupw6ekhh",
    "created": "2024-06-09 14:01:10.635Z",
    "updated": "2024-06-09 14:01:10.635Z",
    "name": "documentmanifest",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "jzoddfbf",
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
        "id": "sfichop7",
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
  const collection = dao.findCollectionByNameOrId("say0e2dupw6ekhh");

  return dao.deleteCollection(collection);
})
