/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1eoo4ocxsmu7ywh",
    "created": "2024-06-09 14:01:10.489Z",
    "updated": "2024-06-09 14:01:10.489Z",
    "name": "contract",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "yvdaz1tm",
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
        "id": "wsxlx2kk",
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
  const collection = dao.findCollectionByNameOrId("1eoo4ocxsmu7ywh");

  return dao.deleteCollection(collection);
})
