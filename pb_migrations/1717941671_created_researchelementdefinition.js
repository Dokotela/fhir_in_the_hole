/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "68ilye4ay7ebrtk",
    "created": "2024-06-09 14:01:11.884Z",
    "updated": "2024-06-09 14:01:11.884Z",
    "name": "researchelementdefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "bkam3v0z",
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
        "id": "ys8is4lx",
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
  const collection = dao.findCollectionByNameOrId("68ilye4ay7ebrtk");

  return dao.deleteCollection(collection);
})
