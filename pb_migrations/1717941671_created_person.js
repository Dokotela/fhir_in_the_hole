/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5se2jnx36u1sdqa",
    "created": "2024-06-09 14:01:11.633Z",
    "updated": "2024-06-09 14:01:11.633Z",
    "name": "person",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "0drxxxew",
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
        "id": "taidwhya",
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
  const collection = dao.findCollectionByNameOrId("5se2jnx36u1sdqa");

  return dao.deleteCollection(collection);
})
