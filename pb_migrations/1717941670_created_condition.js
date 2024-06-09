/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9mwn607ik5vo1st",
    "created": "2024-06-09 14:01:10.467Z",
    "updated": "2024-06-09 14:01:10.467Z",
    "name": "condition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "flcfhweb",
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
        "id": "sm57tff7",
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
  const collection = dao.findCollectionByNameOrId("9mwn607ik5vo1st");

  return dao.deleteCollection(collection);
})
