/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vx3j2n4uy3at4r8",
    "created": "2024-06-09 14:01:10.412Z",
    "updated": "2024-06-09 14:01:10.412Z",
    "name": "codesystemhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "98lbbshk",
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
        "id": "p4rmbipj",
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
  const collection = dao.findCollectionByNameOrId("vx3j2n4uy3at4r8");

  return dao.deleteCollection(collection);
})
