/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "a4q2gl06w3inux1",
    "created": "2024-06-09 14:01:12.194Z",
    "updated": "2024-06-09 14:01:12.194Z",
    "name": "substancehistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "tupttx7v",
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
        "id": "fia2bmnu",
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
  const collection = dao.findCollectionByNameOrId("a4q2gl06w3inux1");

  return dao.deleteCollection(collection);
})
