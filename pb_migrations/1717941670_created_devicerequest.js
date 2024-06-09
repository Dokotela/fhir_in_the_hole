/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ql3fac26lpiotrh",
    "created": "2024-06-09 14:01:10.599Z",
    "updated": "2024-06-09 14:01:10.599Z",
    "name": "devicerequest",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "qdeepgd1",
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
        "id": "apnkvejc",
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
  const collection = dao.findCollectionByNameOrId("ql3fac26lpiotrh");

  return dao.deleteCollection(collection);
})
