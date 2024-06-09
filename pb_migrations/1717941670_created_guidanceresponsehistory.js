/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xaxqfn1yj8sq2dr",
    "created": "2024-06-09 14:01:10.910Z",
    "updated": "2024-06-09 14:01:10.910Z",
    "name": "guidanceresponsehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "0jfnpi7y",
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
        "id": "cydiahlw",
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
  const collection = dao.findCollectionByNameOrId("xaxqfn1yj8sq2dr");

  return dao.deleteCollection(collection);
})
