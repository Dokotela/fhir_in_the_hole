/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "u0g9my69y3zxui3",
    "created": "2024-06-09 14:01:11.902Z",
    "updated": "2024-06-09 14:01:11.902Z",
    "name": "researchstudy",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "606ibkl1",
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
        "id": "wiyrpnt4",
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
  const collection = dao.findCollectionByNameOrId("u0g9my69y3zxui3");

  return dao.deleteCollection(collection);
})
