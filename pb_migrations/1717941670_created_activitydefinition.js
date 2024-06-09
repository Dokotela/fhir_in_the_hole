/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xlr9u5safm293s7",
    "created": "2024-06-09 14:01:10.149Z",
    "updated": "2024-06-09 14:01:10.149Z",
    "name": "activitydefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "rhyihjn8",
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
        "id": "wt8cb110",
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
  const collection = dao.findCollectionByNameOrId("xlr9u5safm293s7");

  return dao.deleteCollection(collection);
})
