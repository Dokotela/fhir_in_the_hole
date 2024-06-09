/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4w5qr31jbp2ay7l",
    "created": "2024-06-09 14:01:10.760Z",
    "updated": "2024-06-09 14:01:10.760Z",
    "name": "evidencehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "coxqk5fr",
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
        "id": "icnminpu",
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
  const collection = dao.findCollectionByNameOrId("4w5qr31jbp2ay7l");

  return dao.deleteCollection(collection);
})
