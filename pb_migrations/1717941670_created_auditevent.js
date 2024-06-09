/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gfza3n5tr0aqxg0",
    "created": "2024-06-09 14:01:10.208Z",
    "updated": "2024-06-09 14:01:10.208Z",
    "name": "auditevent",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "gi5wwnqx",
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
        "id": "v5dl66u0",
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
  const collection = dao.findCollectionByNameOrId("gfza3n5tr0aqxg0");

  return dao.deleteCollection(collection);
})
