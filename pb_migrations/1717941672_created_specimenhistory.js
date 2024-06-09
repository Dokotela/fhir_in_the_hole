/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "giduuodx3019ih8",
    "created": "2024-06-09 14:01:12.041Z",
    "updated": "2024-06-09 14:01:12.041Z",
    "name": "specimenhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ovk9cbit",
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
        "id": "pszmjotv",
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
  const collection = dao.findCollectionByNameOrId("giduuodx3019ih8");

  return dao.deleteCollection(collection);
})
