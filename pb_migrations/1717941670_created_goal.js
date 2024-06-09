/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hobpqq6vjotlo2g",
    "created": "2024-06-09 14:01:10.855Z",
    "updated": "2024-06-09 14:01:10.855Z",
    "name": "goal",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "wi9jlcuk",
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
        "id": "oa2pdd8r",
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
  const collection = dao.findCollectionByNameOrId("hobpqq6vjotlo2g");

  return dao.deleteCollection(collection);
})
