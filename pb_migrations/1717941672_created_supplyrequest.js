/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i73lsa7vszxej69",
    "created": "2024-06-09 14:01:12.255Z",
    "updated": "2024-06-09 14:01:12.255Z",
    "name": "supplyrequest",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "xtcigqng",
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
        "id": "cmrxc8dz",
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
  const collection = dao.findCollectionByNameOrId("i73lsa7vszxej69");

  return dao.deleteCollection(collection);
})
