/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2eo9wfmhc2w5l94",
    "created": "2024-06-09 14:01:11.078Z",
    "updated": "2024-06-09 14:01:11.078Z",
    "name": "linkagehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "2l0ysoyd",
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
        "id": "tb44ccpg",
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
  const collection = dao.findCollectionByNameOrId("2eo9wfmhc2w5l94");

  return dao.deleteCollection(collection);
})
