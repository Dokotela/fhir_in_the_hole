/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "acv3zxqrhtmjx4x",
    "created": "2024-06-09 14:01:10.529Z",
    "updated": "2024-06-09 14:01:10.529Z",
    "name": "coverageeligibilityrequesthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "idp00qp4",
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
        "id": "drval8aq",
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
  const collection = dao.findCollectionByNameOrId("acv3zxqrhtmjx4x");

  return dao.deleteCollection(collection);
})
