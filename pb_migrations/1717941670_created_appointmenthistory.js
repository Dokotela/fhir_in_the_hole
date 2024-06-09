/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kc1so7wwzvshtrr",
    "created": "2024-06-09 14:01:10.195Z",
    "updated": "2024-06-09 14:01:10.195Z",
    "name": "appointmenthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "vgtbesla",
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
        "id": "u0cn5foz",
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
  const collection = dao.findCollectionByNameOrId("kc1so7wwzvshtrr");

  return dao.deleteCollection(collection);
})
