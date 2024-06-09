/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gdnz3pjixuve43g",
    "created": "2024-06-09 14:01:11.963Z",
    "updated": "2024-06-09 14:01:11.963Z",
    "name": "schedule",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ocl9ti8o",
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
        "id": "jc9omdpy",
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
  const collection = dao.findCollectionByNameOrId("gdnz3pjixuve43g");

  return dao.deleteCollection(collection);
})
