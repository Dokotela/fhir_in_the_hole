/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "f594514sikud8nx",
    "created": "2024-06-09 14:01:10.962Z",
    "updated": "2024-06-09 14:01:10.962Z",
    "name": "immunizationevaluation",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "eg0dv3rn",
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
        "id": "wizzm2hq",
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
  const collection = dao.findCollectionByNameOrId("f594514sikud8nx");

  return dao.deleteCollection(collection);
})
