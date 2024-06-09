/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lu5np67jpb5uk8p",
    "created": "2024-06-09 14:01:10.405Z",
    "updated": "2024-06-09 14:01:10.405Z",
    "name": "codesystem",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "d60nonqx",
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
        "id": "aymbsicq",
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
  const collection = dao.findCollectionByNameOrId("lu5np67jpb5uk8p");

  return dao.deleteCollection(collection);
})
