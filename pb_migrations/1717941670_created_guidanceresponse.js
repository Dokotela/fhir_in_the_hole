/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ad8hxe14cbtyllc",
    "created": "2024-06-09 14:01:10.904Z",
    "updated": "2024-06-09 14:01:10.904Z",
    "name": "guidanceresponse",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "8a7mlxk9",
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
        "id": "byr1ssm3",
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
  const collection = dao.findCollectionByNameOrId("ad8hxe14cbtyllc");

  return dao.deleteCollection(collection);
})
