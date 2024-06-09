/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3g4se5o11zjyo7b",
    "created": "2024-06-09 14:01:11.482Z",
    "updated": "2024-06-09 14:01:11.482Z",
    "name": "operationoutcomehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "htp8blla",
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
        "id": "jowjfoch",
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
  const collection = dao.findCollectionByNameOrId("3g4se5o11zjyo7b");

  return dao.deleteCollection(collection);
})
