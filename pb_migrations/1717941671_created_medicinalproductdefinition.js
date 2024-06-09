/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "s96ounuazheu58r",
    "created": "2024-06-09 14:01:11.301Z",
    "updated": "2024-06-09 14:01:11.301Z",
    "name": "medicinalproductdefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "fquo8tox",
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
        "id": "u6nnxv2p",
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
  const collection = dao.findCollectionByNameOrId("s96ounuazheu58r");

  return dao.deleteCollection(collection);
})
