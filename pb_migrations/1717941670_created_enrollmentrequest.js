/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1l0vkd5fqcxayye",
    "created": "2024-06-09 14:01:10.682Z",
    "updated": "2024-06-09 14:01:10.682Z",
    "name": "enrollmentrequest",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "2onoczee",
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
        "id": "wxvf64tl",
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
  const collection = dao.findCollectionByNameOrId("1l0vkd5fqcxayye");

  return dao.deleteCollection(collection);
})
