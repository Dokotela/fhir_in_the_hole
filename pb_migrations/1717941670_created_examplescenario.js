/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "exw43kvelr686x9",
    "created": "2024-06-09 14:01:10.797Z",
    "updated": "2024-06-09 14:01:10.797Z",
    "name": "examplescenario",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "fjcwd2qj",
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
        "id": "qzyh1mvt",
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
  const collection = dao.findCollectionByNameOrId("exw43kvelr686x9");

  return dao.deleteCollection(collection);
})
