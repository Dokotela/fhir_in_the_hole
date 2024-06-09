/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9lfktuj8qbpij5e",
    "created": "2024-06-09 14:01:10.569Z",
    "updated": "2024-06-09 14:01:10.569Z",
    "name": "devicehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ppsy86dg",
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
        "id": "xoshtzd7",
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
  const collection = dao.findCollectionByNameOrId("9lfktuj8qbpij5e");

  return dao.deleteCollection(collection);
})
