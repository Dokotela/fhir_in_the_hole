/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7y4w91llght5vyk",
    "created": "2024-06-09 14:01:11.801Z",
    "updated": "2024-06-09 14:01:11.801Z",
    "name": "regulatedauthorizationhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "wnubeiet",
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
        "id": "4iiu1woc",
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
  const collection = dao.findCollectionByNameOrId("7y4w91llght5vyk");

  return dao.deleteCollection(collection);
})
