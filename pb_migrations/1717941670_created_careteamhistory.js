/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "z3nwbi08e3tie9s",
    "created": "2024-06-09 14:01:10.307Z",
    "updated": "2024-06-09 14:01:10.307Z",
    "name": "careteamhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "lntcfcif",
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
        "id": "yyr1ix7c",
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
  const collection = dao.findCollectionByNameOrId("z3nwbi08e3tie9s");

  return dao.deleteCollection(collection);
})
