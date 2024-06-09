/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bc2qicig82zmul4",
    "created": "2024-06-09 14:01:10.628Z",
    "updated": "2024-06-09 14:01:10.628Z",
    "name": "diagnosticreporthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "8jnsvjbw",
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
        "id": "jhpswiqa",
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
  const collection = dao.findCollectionByNameOrId("bc2qicig82zmul4");

  return dao.deleteCollection(collection);
})
