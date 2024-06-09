/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b2sg0q7twetwftj",
    "created": "2024-06-09 14:01:10.936Z",
    "updated": "2024-06-09 14:01:10.936Z",
    "name": "imagingstudyhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "9w9202aj",
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
        "id": "gzho69j4",
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
  const collection = dao.findCollectionByNameOrId("b2sg0q7twetwftj");

  return dao.deleteCollection(collection);
})
