/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mlww20pa8z6vtvb",
    "created": "2024-06-09 14:01:10.218Z",
    "updated": "2024-06-09 14:01:10.218Z",
    "name": "basic",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "pcohtue9",
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
        "id": "apoyqwjq",
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
  const collection = dao.findCollectionByNameOrId("mlww20pa8z6vtvb");

  return dao.deleteCollection(collection);
})
