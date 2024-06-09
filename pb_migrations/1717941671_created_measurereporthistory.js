/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "q41xljheckcaell",
    "created": "2024-06-09 14:01:11.168Z",
    "updated": "2024-06-09 14:01:11.168Z",
    "name": "measurereporthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "f0fpr2hb",
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
        "id": "5kg7mt2l",
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
  const collection = dao.findCollectionByNameOrId("q41xljheckcaell");

  return dao.deleteCollection(collection);
})
