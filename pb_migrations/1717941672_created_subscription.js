/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yypc2zw9ik09lsg",
    "created": "2024-06-09 14:01:12.105Z",
    "updated": "2024-06-09 14:01:12.105Z",
    "name": "subscription",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "fi3barbw",
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
        "id": "qpxytoiu",
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
  const collection = dao.findCollectionByNameOrId("yypc2zw9ik09lsg");

  return dao.deleteCollection(collection);
})
