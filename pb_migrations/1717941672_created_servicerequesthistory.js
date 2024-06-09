/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lcntp21m31yjfsa",
    "created": "2024-06-09 14:01:12.006Z",
    "updated": "2024-06-09 14:01:12.006Z",
    "name": "servicerequesthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "glywo24s",
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
        "id": "5e4m5vhf",
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
  const collection = dao.findCollectionByNameOrId("lcntp21m31yjfsa");

  return dao.deleteCollection(collection);
})
