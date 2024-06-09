/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4tp7u9yoln8f9zd",
    "created": "2024-06-09 14:01:10.695Z",
    "updated": "2024-06-09 14:01:10.695Z",
    "name": "enrollmentresponse",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "5rpigjmn",
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
        "id": "sogzypll",
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
  const collection = dao.findCollectionByNameOrId("4tp7u9yoln8f9zd");

  return dao.deleteCollection(collection);
})
