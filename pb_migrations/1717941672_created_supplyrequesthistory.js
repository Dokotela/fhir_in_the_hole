/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "s5l7uqwqhgo1inl",
    "created": "2024-06-09 14:01:12.265Z",
    "updated": "2024-06-09 14:01:12.265Z",
    "name": "supplyrequesthistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "lvcbqb0a",
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
        "id": "jeflgdtp",
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
  const collection = dao.findCollectionByNameOrId("s5l7uqwqhgo1inl");

  return dao.deleteCollection(collection);
})
