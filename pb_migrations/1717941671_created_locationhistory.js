/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wvjwfrl7ey6n62s",
    "created": "2024-06-09 14:01:11.120Z",
    "updated": "2024-06-09 14:01:11.120Z",
    "name": "locationhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "pun421lb",
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
        "id": "3z6icucr",
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
  const collection = dao.findCollectionByNameOrId("wvjwfrl7ey6n62s");

  return dao.deleteCollection(collection);
})
