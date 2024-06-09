/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kkl2j4c0axbu44e",
    "created": "2024-06-09 14:01:10.984Z",
    "updated": "2024-06-09 14:01:10.984Z",
    "name": "immunizationrecommendationhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "8rrxim4p",
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
        "id": "q8vaazk4",
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
  const collection = dao.findCollectionByNameOrId("kkl2j4c0axbu44e");

  return dao.deleteCollection(collection);
})
