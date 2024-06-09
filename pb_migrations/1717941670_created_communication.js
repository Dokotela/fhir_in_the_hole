/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "o7xgjd5y55nu7cn",
    "created": "2024-06-09 14:01:10.418Z",
    "updated": "2024-06-09 14:01:10.418Z",
    "name": "communication",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "7zd9xnhk",
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
        "id": "b0eljvtu",
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
  const collection = dao.findCollectionByNameOrId("o7xgjd5y55nu7cn");

  return dao.deleteCollection(collection);
})
