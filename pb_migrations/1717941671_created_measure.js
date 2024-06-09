/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xxehcfs0jlctkzc",
    "created": "2024-06-09 14:01:11.144Z",
    "updated": "2024-06-09 14:01:11.144Z",
    "name": "measure",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "37x2wgvb",
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
        "id": "hdk7lj9l",
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
  const collection = dao.findCollectionByNameOrId("xxehcfs0jlctkzc");

  return dao.deleteCollection(collection);
})
