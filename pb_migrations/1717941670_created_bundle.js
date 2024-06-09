/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ntesq3njdye0pb1",
    "created": "2024-06-09 14:01:10.261Z",
    "updated": "2024-06-09 14:01:10.261Z",
    "name": "bundle",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ykwevemu",
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
        "id": "du1i4m8v",
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
  const collection = dao.findCollectionByNameOrId("ntesq3njdye0pb1");

  return dao.deleteCollection(collection);
})
