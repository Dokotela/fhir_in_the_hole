/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "m32s6zn3yfvlzfa",
    "created": "2024-06-09 14:01:10.373Z",
    "updated": "2024-06-09 14:01:10.373Z",
    "name": "claimresponsehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "qzbpn0zw",
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
        "id": "ijcebooy",
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
  const collection = dao.findCollectionByNameOrId("m32s6zn3yfvlzfa");

  return dao.deleteCollection(collection);
})
