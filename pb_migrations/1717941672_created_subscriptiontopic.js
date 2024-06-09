/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "73tz4spmx861i2r",
    "created": "2024-06-09 14:01:12.154Z",
    "updated": "2024-06-09 14:01:12.154Z",
    "name": "subscriptiontopic",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "oyitxubp",
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
        "id": "cljh7z0s",
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
  const collection = dao.findCollectionByNameOrId("73tz4spmx861i2r");

  return dao.deleteCollection(collection);
})
