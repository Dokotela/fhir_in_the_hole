/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zibehqjcpwzlcu3",
    "created": "2024-06-09 14:01:12.181Z",
    "updated": "2024-06-09 14:01:12.181Z",
    "name": "substance",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "nrpd9kfp",
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
        "id": "lini0v1e",
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
  const collection = dao.findCollectionByNameOrId("zibehqjcpwzlcu3");

  return dao.deleteCollection(collection);
})
