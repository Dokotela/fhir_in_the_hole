/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6d4h50kvuxwngtk",
    "created": "2024-06-09 14:01:10.138Z",
    "updated": "2024-06-09 14:01:10.138Z",
    "name": "account",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "52vwtsbo",
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
        "id": "xbqt1rn3",
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
  const collection = dao.findCollectionByNameOrId("6d4h50kvuxwngtk");

  return dao.deleteCollection(collection);
})
