/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ptrrxcxblef9h0q",
    "created": "2024-06-09 14:01:10.276Z",
    "updated": "2024-06-09 14:01:10.276Z",
    "name": "capabilitystatement",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "j3pke6li",
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
        "id": "3pnyiyph",
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
  const collection = dao.findCollectionByNameOrId("ptrrxcxblef9h0q");

  return dao.deleteCollection(collection);
})
