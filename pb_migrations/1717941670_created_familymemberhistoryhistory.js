/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qvir9h13c05opjb",
    "created": "2024-06-09 14:01:10.835Z",
    "updated": "2024-06-09 14:01:10.835Z",
    "name": "familymemberhistoryhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "wmfoeiqy",
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
        "id": "zzuonzkq",
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
  const collection = dao.findCollectionByNameOrId("qvir9h13c05opjb");

  return dao.deleteCollection(collection);
})
