/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "efhem1jzulgrlb6",
    "created": "2024-06-09 14:01:11.198Z",
    "updated": "2024-06-09 14:01:11.198Z",
    "name": "medicationhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "scdxpfgp",
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
        "id": "mshqnkob",
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
  const collection = dao.findCollectionByNameOrId("efhem1jzulgrlb6");

  return dao.deleteCollection(collection);
})
