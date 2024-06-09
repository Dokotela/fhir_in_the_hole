/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fmod5k0ev8hcr0q",
    "created": "2024-06-09 14:01:10.224Z",
    "updated": "2024-06-09 14:01:10.224Z",
    "name": "basichistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ldd29fgg",
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
        "id": "kuu4ozqo",
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
  const collection = dao.findCollectionByNameOrId("fmod5k0ev8hcr0q");

  return dao.deleteCollection(collection);
})
