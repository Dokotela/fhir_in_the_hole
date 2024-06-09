/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "59kmecx7x1yemrg",
    "created": "2024-06-09 14:01:10.180Z",
    "updated": "2024-06-09 14:01:10.180Z",
    "name": "allergyintolerance",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "mqkbollh",
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
        "id": "a8z6razb",
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
  const collection = dao.findCollectionByNameOrId("59kmecx7x1yemrg");

  return dao.deleteCollection(collection);
})
