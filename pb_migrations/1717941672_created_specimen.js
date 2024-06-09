/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "88tqem7mr4pid31",
    "created": "2024-06-09 14:01:12.033Z",
    "updated": "2024-06-09 14:01:12.033Z",
    "name": "specimen",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "haasibw3",
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
        "id": "qnrswko5",
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
  const collection = dao.findCollectionByNameOrId("88tqem7mr4pid31");

  return dao.deleteCollection(collection);
})
