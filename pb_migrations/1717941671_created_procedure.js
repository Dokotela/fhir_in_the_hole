/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "18oyq8o46wm05oo",
    "created": "2024-06-09 14:01:11.717Z",
    "updated": "2024-06-09 14:01:11.717Z",
    "name": "procedure",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "gqxfjogo",
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
        "id": "ik9120ts",
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
  const collection = dao.findCollectionByNameOrId("18oyq8o46wm05oo");

  return dao.deleteCollection(collection);
})
