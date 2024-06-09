/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5nv2vifwwz43x07",
    "created": "2024-06-09 14:01:10.605Z",
    "updated": "2024-06-09 14:01:10.605Z",
    "name": "devicerequesthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "czaqrml2",
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
        "id": "uyuznbqb",
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
  const collection = dao.findCollectionByNameOrId("5nv2vifwwz43x07");

  return dao.deleteCollection(collection);
})
