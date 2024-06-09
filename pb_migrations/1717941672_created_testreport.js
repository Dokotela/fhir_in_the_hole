/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bam2u7onoiim4z1",
    "created": "2024-06-09 14:01:12.324Z",
    "updated": "2024-06-09 14:01:12.324Z",
    "name": "testreport",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ew7jhhjk",
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
        "id": "cr39xpos",
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
  const collection = dao.findCollectionByNameOrId("bam2u7onoiim4z1");

  return dao.deleteCollection(collection);
})
