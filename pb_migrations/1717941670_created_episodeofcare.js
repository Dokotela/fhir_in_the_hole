/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ug29zeii20y8uck",
    "created": "2024-06-09 14:01:10.709Z",
    "updated": "2024-06-09 14:01:10.709Z",
    "name": "episodeofcare",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "nd5fbvo3",
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
        "id": "fpudttxj",
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
  const collection = dao.findCollectionByNameOrId("ug29zeii20y8uck");

  return dao.deleteCollection(collection);
})
