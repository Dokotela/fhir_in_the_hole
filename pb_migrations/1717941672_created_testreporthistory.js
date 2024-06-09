/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2rcv78zbut929jk",
    "created": "2024-06-09 14:01:12.333Z",
    "updated": "2024-06-09 14:01:12.333Z",
    "name": "testreporthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "t5fmt0f0",
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
        "id": "xfnc63pa",
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
  const collection = dao.findCollectionByNameOrId("2rcv78zbut929jk");

  return dao.deleteCollection(collection);
})
