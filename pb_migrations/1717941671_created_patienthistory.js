/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yj0d55g39asl0tg",
    "created": "2024-06-09 14:01:11.594Z",
    "updated": "2024-06-09 14:01:11.594Z",
    "name": "patienthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "2r4pn5l5",
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
        "id": "yzw6vldm",
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
  const collection = dao.findCollectionByNameOrId("yj0d55g39asl0tg");

  return dao.deleteCollection(collection);
})
