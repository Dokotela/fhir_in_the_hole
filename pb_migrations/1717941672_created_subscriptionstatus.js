/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zsuh9vkq7n9eih3",
    "created": "2024-06-09 14:01:12.130Z",
    "updated": "2024-06-09 14:01:12.130Z",
    "name": "subscriptionstatus",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "c9mi0avv",
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
        "id": "q57kxeiv",
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
  const collection = dao.findCollectionByNameOrId("zsuh9vkq7n9eih3");

  return dao.deleteCollection(collection);
})
