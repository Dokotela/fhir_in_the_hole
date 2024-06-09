/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "noypvhe3et4659o",
    "created": "2024-06-09 14:01:11.283Z",
    "updated": "2024-06-09 14:01:11.283Z",
    "name": "medicationstatement",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "bvg8aaq0",
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
        "id": "e09zsxbb",
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
  const collection = dao.findCollectionByNameOrId("noypvhe3et4659o");

  return dao.deleteCollection(collection);
})
