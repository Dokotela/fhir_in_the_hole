/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dt2kndka8roxoqc",
    "created": "2024-06-09 14:01:11.411Z",
    "updated": "2024-06-09 14:01:11.411Z",
    "name": "nutritionproduct",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "3cdf3atw",
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
        "id": "rnfpocne",
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
  const collection = dao.findCollectionByNameOrId("dt2kndka8roxoqc");

  return dao.deleteCollection(collection);
})
