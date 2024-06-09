/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "w2528yqbisiibpq",
    "created": "2024-06-09 14:01:11.234Z",
    "updated": "2024-06-09 14:01:11.234Z",
    "name": "medicationdispensehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "cs85q97i",
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
        "id": "qkthmvjd",
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
  const collection = dao.findCollectionByNameOrId("w2528yqbisiibpq");

  return dao.deleteCollection(collection);
})
