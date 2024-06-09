/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "opmm15q26t4xr63",
    "created": "2024-06-09 14:01:12.016Z",
    "updated": "2024-06-09 14:01:12.016Z",
    "name": "slot",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "mopntp2x",
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
        "id": "jhbrinl2",
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
  const collection = dao.findCollectionByNameOrId("opmm15q26t4xr63");

  return dao.deleteCollection(collection);
})
