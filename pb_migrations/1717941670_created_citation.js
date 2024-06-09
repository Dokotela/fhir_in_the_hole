/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dqxm8zqb1qpcih2",
    "created": "2024-06-09 14:01:10.349Z",
    "updated": "2024-06-09 14:01:10.349Z",
    "name": "citation",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "jkndwhmh",
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
        "id": "k8h9rdnn",
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
  const collection = dao.findCollectionByNameOrId("dqxm8zqb1qpcih2");

  return dao.deleteCollection(collection);
})
