/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vh35spzx8fyln8c",
    "created": "2024-06-09 14:01:11.489Z",
    "updated": "2024-06-09 14:01:11.489Z",
    "name": "organization",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "fzcebisg",
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
        "id": "d38twyo6",
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
  const collection = dao.findCollectionByNameOrId("vh35spzx8fyln8c");

  return dao.deleteCollection(collection);
})
