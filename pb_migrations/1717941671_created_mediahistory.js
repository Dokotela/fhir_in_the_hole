/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lpzl60w3qe6ric4",
    "created": "2024-06-09 14:01:11.183Z",
    "updated": "2024-06-09 14:01:11.183Z",
    "name": "mediahistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "4jnvtaoo",
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
        "id": "hdojwlfg",
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
  const collection = dao.findCollectionByNameOrId("lpzl60w3qe6ric4");

  return dao.deleteCollection(collection);
})
