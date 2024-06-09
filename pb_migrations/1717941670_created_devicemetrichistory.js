/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9dizfbacsw6jr9l",
    "created": "2024-06-09 14:01:10.594Z",
    "updated": "2024-06-09 14:01:10.594Z",
    "name": "devicemetrichistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "lbp7qnce",
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
        "id": "apyybfro",
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
  const collection = dao.findCollectionByNameOrId("9dizfbacsw6jr9l");

  return dao.deleteCollection(collection);
})
