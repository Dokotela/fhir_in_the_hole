/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lzj4ekyeuisrwdk",
    "created": "2024-06-09 14:01:10.429Z",
    "updated": "2024-06-09 14:01:10.429Z",
    "name": "communicationrequest",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "kmxyhlhp",
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
        "id": "cg2zbho6",
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
  const collection = dao.findCollectionByNameOrId("lzj4ekyeuisrwdk");

  return dao.deleteCollection(collection);
})
