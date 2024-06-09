/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "r8gbad1vmzfzd9m",
    "created": "2024-06-09 14:01:11.158Z",
    "updated": "2024-06-09 14:01:11.158Z",
    "name": "measurereport",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "vfstikza",
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
        "id": "hd099ibr",
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
  const collection = dao.findCollectionByNameOrId("r8gbad1vmzfzd9m");

  return dao.deleteCollection(collection);
})
