/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "v9yvinxnc9k3oru",
    "created": "2024-06-09 14:01:11.365Z",
    "updated": "2024-06-09 14:01:11.365Z",
    "name": "molecularsequencehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "tpb0a1uj",
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
        "id": "atxomjje",
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
  const collection = dao.findCollectionByNameOrId("v9yvinxnc9k3oru");

  return dao.deleteCollection(collection);
})
