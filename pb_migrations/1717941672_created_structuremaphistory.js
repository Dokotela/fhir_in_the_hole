/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "x69ciqhem4hl0kc",
    "created": "2024-06-09 14:01:12.096Z",
    "updated": "2024-06-09 14:01:12.096Z",
    "name": "structuremaphistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "6kfl66da",
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
        "id": "dviwehe7",
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
  const collection = dao.findCollectionByNameOrId("x69ciqhem4hl0kc");

  return dao.deleteCollection(collection);
})
