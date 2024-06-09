/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "eni6uphnn8u9bzf",
    "created": "2024-06-09 14:01:10.700Z",
    "updated": "2024-06-09 14:01:10.700Z",
    "name": "enrollmentresponsehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "afy60tqr",
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
        "id": "0iiczlho",
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
  const collection = dao.findCollectionByNameOrId("eni6uphnn8u9bzf");

  return dao.deleteCollection(collection);
})
