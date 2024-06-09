/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "o4b0rjn3ckg7apw",
    "created": "2024-06-09 14:01:11.892Z",
    "updated": "2024-06-09 14:01:11.892Z",
    "name": "researchelementdefinitionhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "jhtxno4w",
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
        "id": "rxp6i0on",
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
  const collection = dao.findCollectionByNameOrId("o4b0rjn3ckg7apw");

  return dao.deleteCollection(collection);
})
