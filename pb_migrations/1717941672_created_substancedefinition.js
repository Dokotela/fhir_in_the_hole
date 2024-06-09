/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "s9yet2n17yz1t84",
    "created": "2024-06-09 14:01:12.206Z",
    "updated": "2024-06-09 14:01:12.206Z",
    "name": "substancedefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "pbuqqlpa",
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
        "id": "vocqurt6",
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
  const collection = dao.findCollectionByNameOrId("s9yet2n17yz1t84");

  return dao.deleteCollection(collection);
})
