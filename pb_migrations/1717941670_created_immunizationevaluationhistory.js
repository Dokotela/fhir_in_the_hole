/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ou96h55fpegx84h",
    "created": "2024-06-09 14:01:10.970Z",
    "updated": "2024-06-09 14:01:10.970Z",
    "name": "immunizationevaluationhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "m0vv5cjj",
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
        "id": "wxkykoic",
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
  const collection = dao.findCollectionByNameOrId("ou96h55fpegx84h");

  return dao.deleteCollection(collection);
})
