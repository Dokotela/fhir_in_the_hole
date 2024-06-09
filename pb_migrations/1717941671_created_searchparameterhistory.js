/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yn38af7zt5zwl69",
    "created": "2024-06-09 14:01:11.989Z",
    "updated": "2024-06-09 14:01:11.989Z",
    "name": "searchparameterhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "xck8jhwv",
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
        "id": "19zrumig",
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
  const collection = dao.findCollectionByNameOrId("yn38af7zt5zwl69");

  return dao.deleteCollection(collection);
})
