/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y1aej0sw25w8siu",
    "created": "2024-06-09 14:01:10.457Z",
    "updated": "2024-06-09 14:01:10.457Z",
    "name": "conceptmap",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "1gr04k58",
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
        "id": "xnprc9xf",
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
  const collection = dao.findCollectionByNameOrId("y1aej0sw25w8siu");

  return dao.deleteCollection(collection);
})
