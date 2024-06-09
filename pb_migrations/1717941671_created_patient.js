/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zk46i3fo1t7q2me",
    "created": "2024-06-09 14:01:11.585Z",
    "updated": "2024-06-09 14:01:11.585Z",
    "name": "patient",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ba4ih4ld",
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
        "id": "z5jplczw",
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
  const collection = dao.findCollectionByNameOrId("zk46i3fo1t7q2me");

  return dao.deleteCollection(collection);
})
