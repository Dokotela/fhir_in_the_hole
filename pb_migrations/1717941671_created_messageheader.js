/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "haoztfwrjylqr8e",
    "created": "2024-06-09 14:01:11.336Z",
    "updated": "2024-06-09 14:01:11.336Z",
    "name": "messageheader",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "dhmy9vzu",
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
        "id": "iii3ztyb",
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
  const collection = dao.findCollectionByNameOrId("haoztfwrjylqr8e");

  return dao.deleteCollection(collection);
})
