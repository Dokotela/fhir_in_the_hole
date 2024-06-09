/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "r2nppcg6kz3z173",
    "created": "2024-06-09 14:01:10.676Z",
    "updated": "2024-06-09 14:01:10.676Z",
    "name": "endpointhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ggsk2qb3",
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
        "id": "oamx4ndt",
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
  const collection = dao.findCollectionByNameOrId("r2nppcg6kz3z173");

  return dao.deleteCollection(collection);
})
