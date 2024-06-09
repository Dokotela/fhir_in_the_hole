/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qvdhll9kjosn8dl",
    "created": "2024-06-09 14:01:10.655Z",
    "updated": "2024-06-09 14:01:10.655Z",
    "name": "documentreferencehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "xu1o6qqf",
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
        "id": "1dz2nmjt",
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
  const collection = dao.findCollectionByNameOrId("qvdhll9kjosn8dl");

  return dao.deleteCollection(collection);
})
