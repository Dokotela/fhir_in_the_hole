/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ka2whrwqd9xba1o",
    "created": "2024-06-09 14:01:10.244Z",
    "updated": "2024-06-09 14:01:10.244Z",
    "name": "biologicallyderivedproducthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "pdtgq9vs",
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
        "id": "rzjjat7x",
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
  const collection = dao.findCollectionByNameOrId("ka2whrwqd9xba1o");

  return dao.deleteCollection(collection);
})
