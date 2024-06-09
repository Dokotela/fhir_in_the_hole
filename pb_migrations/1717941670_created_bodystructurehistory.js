/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "na3a3p17694jv9l",
    "created": "2024-06-09 14:01:10.256Z",
    "updated": "2024-06-09 14:01:10.256Z",
    "name": "bodystructurehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "t5gmxeum",
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
        "id": "5hxpyos5",
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
  const collection = dao.findCollectionByNameOrId("na3a3p17694jv9l");

  return dao.deleteCollection(collection);
})
