/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vfjvzn1o5e1bc50",
    "created": "2024-06-09 14:01:11.644Z",
    "updated": "2024-06-09 14:01:11.644Z",
    "name": "personhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "z12wz8zq",
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
        "id": "jr8kwnjj",
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
  const collection = dao.findCollectionByNameOrId("vfjvzn1o5e1bc50");

  return dao.deleteCollection(collection);
})
