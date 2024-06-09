/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wrqnzfa5t5zmbtm",
    "created": "2024-06-09 14:01:10.917Z",
    "updated": "2024-06-09 14:01:10.917Z",
    "name": "healthcareservice",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "fzzjfjmy",
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
        "id": "tb4dpjw0",
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
  const collection = dao.findCollectionByNameOrId("wrqnzfa5t5zmbtm");

  return dao.deleteCollection(collection);
})
