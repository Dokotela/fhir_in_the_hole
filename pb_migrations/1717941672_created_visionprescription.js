/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hsec3e6wi43qn2m",
    "created": "2024-06-09 14:01:12.413Z",
    "updated": "2024-06-09 14:01:12.413Z",
    "name": "visionprescription",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "y4dzn5it",
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
        "id": "7rtrhwui",
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
  const collection = dao.findCollectionByNameOrId("hsec3e6wi43qn2m");

  return dao.deleteCollection(collection);
})
