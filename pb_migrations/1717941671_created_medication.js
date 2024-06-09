/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qckozadiyet2suy",
    "created": "2024-06-09 14:01:11.190Z",
    "updated": "2024-06-09 14:01:11.190Z",
    "name": "medication",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ly0f9zy6",
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
        "id": "ayfp0cr3",
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
  const collection = dao.findCollectionByNameOrId("qckozadiyet2suy");

  return dao.deleteCollection(collection);
})
