/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ygyfqqd9oklfbwx",
    "created": "2024-06-09 14:01:10.773Z",
    "updated": "2024-06-09 14:01:10.773Z",
    "name": "evidencereporthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "jthjo8cg",
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
        "id": "et0zrn7r",
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
  const collection = dao.findCollectionByNameOrId("ygyfqqd9oklfbwx");

  return dao.deleteCollection(collection);
})
