/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dl90gxb80qaqmcj",
    "created": "2024-06-09 14:01:10.724Z",
    "updated": "2024-06-09 14:01:10.724Z",
    "name": "eventdefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "cizdg1yn",
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
        "id": "opa3kov0",
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
  const collection = dao.findCollectionByNameOrId("dl90gxb80qaqmcj");

  return dao.deleteCollection(collection);
})
