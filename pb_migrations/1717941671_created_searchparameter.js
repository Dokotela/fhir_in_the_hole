/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "paro8ee2ft2ha8k",
    "created": "2024-06-09 14:01:11.980Z",
    "updated": "2024-06-09 14:01:11.980Z",
    "name": "searchparameter",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "dxjry4zg",
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
        "id": "98xvrsii",
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
  const collection = dao.findCollectionByNameOrId("paro8ee2ft2ha8k");

  return dao.deleteCollection(collection);
})
