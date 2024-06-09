/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lizk5fping851jk",
    "created": "2024-06-09 14:01:11.475Z",
    "updated": "2024-06-09 14:01:11.475Z",
    "name": "operationoutcome",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "rmibytfx",
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
        "id": "v2hzg5tt",
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
  const collection = dao.findCollectionByNameOrId("lizk5fping851jk");

  return dao.deleteCollection(collection);
})
