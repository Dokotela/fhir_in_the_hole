/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gupc0ee0egg49gl",
    "created": "2024-06-09 14:01:12.231Z",
    "updated": "2024-06-09 14:01:12.231Z",
    "name": "supplydelivery",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "zxduh4xw",
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
        "id": "sp0twbwq",
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
  const collection = dao.findCollectionByNameOrId("gupc0ee0egg49gl");

  return dao.deleteCollection(collection);
})
