/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b3ur8eb4b1dcmy8",
    "created": "2024-06-09 14:01:12.118Z",
    "updated": "2024-06-09 14:01:12.118Z",
    "name": "subscriptionhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "gm96joic",
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
        "id": "ikslp8bk",
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
  const collection = dao.findCollectionByNameOrId("b3ur8eb4b1dcmy8");

  return dao.deleteCollection(collection);
})
