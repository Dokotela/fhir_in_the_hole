/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qdxpxfukfiyhjf4",
    "created": "2024-06-09 14:01:10.575Z",
    "updated": "2024-06-09 14:01:10.575Z",
    "name": "devicedefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ggnbcgdn",
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
        "id": "j58zxkzc",
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
  const collection = dao.findCollectionByNameOrId("qdxpxfukfiyhjf4");

  return dao.deleteCollection(collection);
})
