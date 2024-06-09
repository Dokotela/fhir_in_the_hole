/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b6x59lszjknha42",
    "created": "2024-06-09 14:01:10.650Z",
    "updated": "2024-06-09 14:01:10.650Z",
    "name": "documentreference",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "xw4xv9sz",
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
        "id": "yo8b7bgo",
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
  const collection = dao.findCollectionByNameOrId("b6x59lszjknha42");

  return dao.deleteCollection(collection);
})
