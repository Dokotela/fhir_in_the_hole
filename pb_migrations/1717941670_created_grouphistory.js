/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qkqe74u5i40no4l",
    "created": "2024-06-09 14:01:10.896Z",
    "updated": "2024-06-09 14:01:10.896Z",
    "name": "grouphistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "dsrrfwsb",
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
        "id": "khvoldmm",
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
  const collection = dao.findCollectionByNameOrId("qkqe74u5i40no4l");

  return dao.deleteCollection(collection);
})
