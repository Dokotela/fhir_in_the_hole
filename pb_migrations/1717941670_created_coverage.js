/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9fyyx3k6ivdl04p",
    "created": "2024-06-09 14:01:10.506Z",
    "updated": "2024-06-09 14:01:10.506Z",
    "name": "coverage",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ortcgget",
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
        "id": "h1wuowhm",
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
  const collection = dao.findCollectionByNameOrId("9fyyx3k6ivdl04p");

  return dao.deleteCollection(collection);
})
