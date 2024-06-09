/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "km0s94fd4mvzyla",
    "created": "2024-06-09 14:01:10.998Z",
    "updated": "2024-06-09 14:01:10.998Z",
    "name": "implementationguidehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "dg1glx1t",
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
        "id": "jnyzhm5f",
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
  const collection = dao.findCollectionByNameOrId("km0s94fd4mvzyla");

  return dao.deleteCollection(collection);
})
