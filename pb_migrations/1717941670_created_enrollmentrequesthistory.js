/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "va6535qve4pmvy3",
    "created": "2024-06-09 14:01:10.689Z",
    "updated": "2024-06-09 14:01:10.689Z",
    "name": "enrollmentrequesthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "r94lx9b4",
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
        "id": "egtxkxwh",
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
  const collection = dao.findCollectionByNameOrId("va6535qve4pmvy3");

  return dao.deleteCollection(collection);
})
