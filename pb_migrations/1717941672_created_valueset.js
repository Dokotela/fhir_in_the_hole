/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3xo63eq84pvy2l5",
    "created": "2024-06-09 14:01:12.365Z",
    "updated": "2024-06-09 14:01:12.365Z",
    "name": "valueset",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "tlobk5ha",
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
        "id": "jmvufymd",
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
  const collection = dao.findCollectionByNameOrId("3xo63eq84pvy2l5");

  return dao.deleteCollection(collection);
})
