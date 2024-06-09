/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xg8iqjon8upd48v",
    "created": "2024-06-09 14:01:10.924Z",
    "updated": "2024-06-09 14:01:10.924Z",
    "name": "healthcareservicehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "p5dxucea",
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
        "id": "bklitlpj",
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
  const collection = dao.findCollectionByNameOrId("xg8iqjon8upd48v");

  return dao.deleteCollection(collection);
})
