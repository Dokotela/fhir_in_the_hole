/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cldhrwlbmr3qanp",
    "created": "2024-06-09 14:01:10.338Z",
    "updated": "2024-06-09 14:01:10.338Z",
    "name": "chargeitemdefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "2ekswuqq",
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
        "id": "hbfzf4je",
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
  const collection = dao.findCollectionByNameOrId("cldhrwlbmr3qanp");

  return dao.deleteCollection(collection);
})
