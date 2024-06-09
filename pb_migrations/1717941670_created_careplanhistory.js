/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yqcnpsop4cshnbi",
    "created": "2024-06-09 14:01:10.296Z",
    "updated": "2024-06-09 14:01:10.296Z",
    "name": "careplanhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "7pjiurqb",
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
        "id": "hnzejpj6",
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
  const collection = dao.findCollectionByNameOrId("yqcnpsop4cshnbi");

  return dao.deleteCollection(collection);
})
