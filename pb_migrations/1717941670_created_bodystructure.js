/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ck61zz6m7qzcyrz",
    "created": "2024-06-09 14:01:10.250Z",
    "updated": "2024-06-09 14:01:10.250Z",
    "name": "bodystructure",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "zy6nd4jn",
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
        "id": "oyfveqdd",
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
  const collection = dao.findCollectionByNameOrId("ck61zz6m7qzcyrz");

  return dao.deleteCollection(collection);
})
