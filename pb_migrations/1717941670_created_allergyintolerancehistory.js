/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9m4hwxjiy5eu32w",
    "created": "2024-06-09 14:01:10.185Z",
    "updated": "2024-06-09 14:01:10.185Z",
    "name": "allergyintolerancehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "xnpdhwzt",
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
        "id": "ndnlu85o",
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
  const collection = dao.findCollectionByNameOrId("9m4hwxjiy5eu32w");

  return dao.deleteCollection(collection);
})
