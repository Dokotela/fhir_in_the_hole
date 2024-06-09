/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "uefti0q2stgwo2c",
    "created": "2024-06-09 14:01:10.449Z",
    "updated": "2024-06-09 14:01:10.449Z",
    "name": "composition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "5z8azik1",
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
        "id": "kce76sbg",
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
  const collection = dao.findCollectionByNameOrId("uefti0q2stgwo2c");

  return dao.deleteCollection(collection);
})
