/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ncw4vd1ez44y4jq",
    "created": "2024-06-09 14:01:11.823Z",
    "updated": "2024-06-09 14:01:11.823Z",
    "name": "relatedpersonhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "pe8zeiqh",
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
        "id": "v9lopyzb",
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
  const collection = dao.findCollectionByNameOrId("ncw4vd1ez44y4jq");

  return dao.deleteCollection(collection);
})
