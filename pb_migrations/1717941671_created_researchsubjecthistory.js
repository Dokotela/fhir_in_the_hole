/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4kyzt60y4s6b0po",
    "created": "2024-06-09 14:01:11.935Z",
    "updated": "2024-06-09 14:01:11.935Z",
    "name": "researchsubjecthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "tueikk9g",
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
        "id": "fmzuhxhu",
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
  const collection = dao.findCollectionByNameOrId("4kyzt60y4s6b0po");

  return dao.deleteCollection(collection);
})
