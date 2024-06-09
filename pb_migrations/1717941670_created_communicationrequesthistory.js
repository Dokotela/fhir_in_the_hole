/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "c7l38lw51wnjehy",
    "created": "2024-06-09 14:01:10.435Z",
    "updated": "2024-06-09 14:01:10.435Z",
    "name": "communicationrequesthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "3wpw8q9k",
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
        "id": "0ntghcmx",
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
  const collection = dao.findCollectionByNameOrId("c7l38lw51wnjehy");

  return dao.deleteCollection(collection);
})
