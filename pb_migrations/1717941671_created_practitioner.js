/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9prwoo866ilcw1i",
    "created": "2024-06-09 14:01:11.673Z",
    "updated": "2024-06-09 14:01:11.673Z",
    "name": "practitioner",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "lw6qz3fp",
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
        "id": "n1cutdmn",
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
  const collection = dao.findCollectionByNameOrId("9prwoo866ilcw1i");

  return dao.deleteCollection(collection);
})
