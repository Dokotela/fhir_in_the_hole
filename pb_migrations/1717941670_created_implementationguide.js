/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "apgyp7crwak2wp1",
    "created": "2024-06-09 14:01:10.991Z",
    "updated": "2024-06-09 14:01:10.991Z",
    "name": "implementationguide",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "9bomxrsc",
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
        "id": "b8ybmkes",
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
  const collection = dao.findCollectionByNameOrId("apgyp7crwak2wp1");

  return dao.deleteCollection(collection);
})
