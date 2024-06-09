/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "88ic2m5hf9afl75",
    "created": "2024-06-09 14:01:10.200Z",
    "updated": "2024-06-09 14:01:10.200Z",
    "name": "appointmentresponse",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "g2cfhycl",
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
        "id": "amcu9hwo",
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
  const collection = dao.findCollectionByNameOrId("88ic2m5hf9afl75");

  return dao.deleteCollection(collection);
})
