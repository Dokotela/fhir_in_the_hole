/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "osyxdvlv4lz9rwb",
    "created": "2024-06-09 14:01:10.387Z",
    "updated": "2024-06-09 14:01:10.387Z",
    "name": "clinicalimpressionhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "shgwginr",
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
        "id": "pa9mb0ku",
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
  const collection = dao.findCollectionByNameOrId("osyxdvlv4lz9rwb");

  return dao.deleteCollection(collection);
})
