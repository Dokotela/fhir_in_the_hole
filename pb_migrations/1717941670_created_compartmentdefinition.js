/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "66x5ab0h2mhjn3g",
    "created": "2024-06-09 14:01:10.440Z",
    "updated": "2024-06-09 14:01:10.440Z",
    "name": "compartmentdefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ecyhhlhb",
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
        "id": "h2mhtbqa",
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
  const collection = dao.findCollectionByNameOrId("66x5ab0h2mhjn3g");

  return dao.deleteCollection(collection);
})
