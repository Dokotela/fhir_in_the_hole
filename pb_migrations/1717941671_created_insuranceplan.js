/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ubjxoj1mzlrc9aj",
    "created": "2024-06-09 14:01:11.021Z",
    "updated": "2024-06-09 14:01:11.021Z",
    "name": "insuranceplan",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "w1kwiua6",
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
        "id": "gj8w143c",
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
  const collection = dao.findCollectionByNameOrId("ubjxoj1mzlrc9aj");

  return dao.deleteCollection(collection);
})
