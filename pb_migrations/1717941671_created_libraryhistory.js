/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gd2xh3k6r5znhi6",
    "created": "2024-06-09 14:01:11.063Z",
    "updated": "2024-06-09 14:01:11.063Z",
    "name": "libraryhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "clmatwiq",
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
        "id": "tkfjnr7y",
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
  const collection = dao.findCollectionByNameOrId("gd2xh3k6r5znhi6");

  return dao.deleteCollection(collection);
})
