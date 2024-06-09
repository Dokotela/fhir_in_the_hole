/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "147a67ukuz4u3l3",
    "created": "2024-06-09 14:01:11.402Z",
    "updated": "2024-06-09 14:01:11.402Z",
    "name": "nutritionorderhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "d1hobxku",
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
        "id": "uve9cvtp",
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
  const collection = dao.findCollectionByNameOrId("147a67ukuz4u3l3");

  return dao.deleteCollection(collection);
})
