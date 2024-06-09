/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qw1ghmomompncuo",
    "created": "2024-06-09 14:01:11.529Z",
    "updated": "2024-06-09 14:01:11.529Z",
    "name": "packagedproductdefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "grmmatfm",
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
        "id": "pqydi1th",
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
  const collection = dao.findCollectionByNameOrId("qw1ghmomompncuo");

  return dao.deleteCollection(collection);
})
