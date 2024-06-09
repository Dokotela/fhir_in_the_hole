/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "52uazldev85o68s",
    "created": "2024-06-09 14:01:11.050Z",
    "updated": "2024-06-09 14:01:11.050Z",
    "name": "invoicehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "b1d9dlps",
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
        "id": "0eobecbc",
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
  const collection = dao.findCollectionByNameOrId("52uazldev85o68s");

  return dao.deleteCollection(collection);
})
