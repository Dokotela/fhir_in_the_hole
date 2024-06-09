/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0ve39yvxx43o82q",
    "created": "2024-06-09 14:01:11.346Z",
    "updated": "2024-06-09 14:01:11.346Z",
    "name": "messageheaderhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "qu6qtt8a",
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
        "id": "f8vo96cn",
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
  const collection = dao.findCollectionByNameOrId("0ve39yvxx43o82q");

  return dao.deleteCollection(collection);
})
