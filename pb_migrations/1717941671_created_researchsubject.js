/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jrov70ks5odbp0w",
    "created": "2024-06-09 14:01:11.925Z",
    "updated": "2024-06-09 14:01:11.925Z",
    "name": "researchsubject",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "avsvmlx7",
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
        "id": "nbluqm9r",
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
  const collection = dao.findCollectionByNameOrId("jrov70ks5odbp0w");

  return dao.deleteCollection(collection);
})
