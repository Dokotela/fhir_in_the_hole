/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mizqmclr8soa7y7",
    "created": "2024-06-09 14:01:10.828Z",
    "updated": "2024-06-09 14:01:10.828Z",
    "name": "familymemberhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "g7puar8d",
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
        "id": "9ds4itkb",
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
  const collection = dao.findCollectionByNameOrId("mizqmclr8soa7y7");

  return dao.deleteCollection(collection);
})
