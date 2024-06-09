/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "h3zsn4tz2jfhv3x",
    "created": "2024-06-09 14:01:11.729Z",
    "updated": "2024-06-09 14:01:11.729Z",
    "name": "procedurehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "4nu2ggmr",
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
        "id": "zxjunnup",
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
  const collection = dao.findCollectionByNameOrId("h3zsn4tz2jfhv3x");

  return dao.deleteCollection(collection);
})
