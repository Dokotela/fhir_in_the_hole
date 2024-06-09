/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8nt7tiziskjq9j8",
    "created": "2024-06-09 14:01:11.498Z",
    "updated": "2024-06-09 14:01:11.498Z",
    "name": "organizationhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "cqhgdkn6",
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
        "id": "w3izrbob",
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
  const collection = dao.findCollectionByNameOrId("8nt7tiziskjq9j8");

  return dao.deleteCollection(collection);
})
