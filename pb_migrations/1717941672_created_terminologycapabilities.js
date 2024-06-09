/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yuahqhksaoti32j",
    "created": "2024-06-09 14:01:12.301Z",
    "updated": "2024-06-09 14:01:12.301Z",
    "name": "terminologycapabilities",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "p3jhjgvz",
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
        "id": "i1mvaxb4",
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
  const collection = dao.findCollectionByNameOrId("yuahqhksaoti32j");

  return dao.deleteCollection(collection);
})
