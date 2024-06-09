/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jdb04gnu6axc91s",
    "created": "2024-06-09 14:01:10.523Z",
    "updated": "2024-06-09 14:01:10.523Z",
    "name": "coverageeligibilityrequest",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "nuci04rk",
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
        "id": "ppfte88o",
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
  const collection = dao.findCollectionByNameOrId("jdb04gnu6axc91s");

  return dao.deleteCollection(collection);
})
