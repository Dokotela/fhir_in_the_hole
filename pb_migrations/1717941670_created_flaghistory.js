/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lqfpti69ctdmg9w",
    "created": "2024-06-09 14:01:10.849Z",
    "updated": "2024-06-09 14:01:10.849Z",
    "name": "flaghistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "rfwkvupx",
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
        "id": "ro3nqi9b",
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
  const collection = dao.findCollectionByNameOrId("lqfpti69ctdmg9w");

  return dao.deleteCollection(collection);
})
