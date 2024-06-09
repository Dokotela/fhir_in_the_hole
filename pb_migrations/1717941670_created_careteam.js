/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "l5przfignl18pyf",
    "created": "2024-06-09 14:01:10.303Z",
    "updated": "2024-06-09 14:01:10.303Z",
    "name": "careteam",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ocw5nz7n",
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
        "id": "y2qqtqfl",
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
  const collection = dao.findCollectionByNameOrId("l5przfignl18pyf");

  return dao.deleteCollection(collection);
})
