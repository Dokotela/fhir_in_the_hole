/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "u4zqmmo602fphx6",
    "created": "2024-06-09 14:01:11.006Z",
    "updated": "2024-06-09 14:01:11.006Z",
    "name": "ingredient",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "lhofkpmy",
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
        "id": "h4aeopwo",
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
  const collection = dao.findCollectionByNameOrId("u4zqmmo602fphx6");

  return dao.deleteCollection(collection);
})
