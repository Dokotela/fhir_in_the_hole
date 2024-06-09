/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6vjtbyyv5lwgmah",
    "created": "2024-06-09 14:01:11.013Z",
    "updated": "2024-06-09 14:01:11.013Z",
    "name": "ingredienthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "glihbpwj",
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
        "id": "nl76ktia",
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
  const collection = dao.findCollectionByNameOrId("6vjtbyyv5lwgmah");

  return dao.deleteCollection(collection);
})
