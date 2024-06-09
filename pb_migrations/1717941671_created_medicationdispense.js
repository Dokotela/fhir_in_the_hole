/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n03ee0k4llqzvcs",
    "created": "2024-06-09 14:01:11.224Z",
    "updated": "2024-06-09 14:01:11.224Z",
    "name": "medicationdispense",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "gptww5ch",
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
        "id": "eofhdyt3",
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
  const collection = dao.findCollectionByNameOrId("n03ee0k4llqzvcs");

  return dao.deleteCollection(collection);
})
