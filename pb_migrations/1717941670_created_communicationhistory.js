/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y7e5pr1v2y9l3vh",
    "created": "2024-06-09 14:01:10.423Z",
    "updated": "2024-06-09 14:01:10.423Z",
    "name": "communicationhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ig5d9emx",
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
        "id": "zocz4xe6",
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
  const collection = dao.findCollectionByNameOrId("y7e5pr1v2y9l3vh");

  return dao.deleteCollection(collection);
})
