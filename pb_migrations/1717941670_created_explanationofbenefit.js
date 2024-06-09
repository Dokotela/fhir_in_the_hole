/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bxic2kqnot5aogs",
    "created": "2024-06-09 14:01:10.814Z",
    "updated": "2024-06-09 14:01:10.814Z",
    "name": "explanationofbenefit",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "gv8mn6rc",
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
        "id": "coawzbl8",
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
  const collection = dao.findCollectionByNameOrId("bxic2kqnot5aogs");

  return dao.deleteCollection(collection);
})
