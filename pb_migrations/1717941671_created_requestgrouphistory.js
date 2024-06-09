/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y5g40e9nyzx273i",
    "created": "2024-06-09 14:01:11.850Z",
    "updated": "2024-06-09 14:01:11.850Z",
    "name": "requestgrouphistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "83zilgpk",
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
        "id": "88gaymcp",
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
  const collection = dao.findCollectionByNameOrId("y5g40e9nyzx273i");

  return dao.deleteCollection(collection);
})
