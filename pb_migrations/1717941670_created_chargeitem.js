/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3x1cfic0riiyi76",
    "created": "2024-06-09 14:01:10.327Z",
    "updated": "2024-06-09 14:01:10.327Z",
    "name": "chargeitem",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "9brpcugp",
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
        "id": "bqjgka2d",
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
  const collection = dao.findCollectionByNameOrId("3x1cfic0riiyi76");

  return dao.deleteCollection(collection);
})
