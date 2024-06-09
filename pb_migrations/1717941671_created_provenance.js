/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jtkvoerp8dmguin",
    "created": "2024-06-09 14:01:11.739Z",
    "updated": "2024-06-09 14:01:11.739Z",
    "name": "provenance",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "t6u99dnh",
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
        "id": "wrjifrdp",
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
  const collection = dao.findCollectionByNameOrId("jtkvoerp8dmguin");

  return dao.deleteCollection(collection);
})
