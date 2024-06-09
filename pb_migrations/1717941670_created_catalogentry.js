/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7h33v08rvkqdu5i",
    "created": "2024-06-09 14:01:10.314Z",
    "updated": "2024-06-09 14:01:10.314Z",
    "name": "catalogentry",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ok9uij21",
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
        "id": "3et852fh",
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
  const collection = dao.findCollectionByNameOrId("7h33v08rvkqdu5i");

  return dao.deleteCollection(collection);
})
