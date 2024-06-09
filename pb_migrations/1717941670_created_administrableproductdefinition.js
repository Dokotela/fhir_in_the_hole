/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "am3yvcorg0c4nj5",
    "created": "2024-06-09 14:01:10.160Z",
    "updated": "2024-06-09 14:01:10.160Z",
    "name": "administrableproductdefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "6swpzlqp",
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
        "id": "ro5sfude",
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
  const collection = dao.findCollectionByNameOrId("am3yvcorg0c4nj5");

  return dao.deleteCollection(collection);
})
