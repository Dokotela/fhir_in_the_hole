/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rsdvuc8afxsypha",
    "created": "2024-06-09 14:01:10.976Z",
    "updated": "2024-06-09 14:01:10.976Z",
    "name": "immunizationrecommendation",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "o4jyaaxc",
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
        "id": "ldtxhikq",
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
  const collection = dao.findCollectionByNameOrId("rsdvuc8afxsypha");

  return dao.deleteCollection(collection);
})
