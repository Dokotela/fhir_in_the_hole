/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kfiny3s8mplgi5k",
    "created": "2024-06-09 14:01:11.508Z",
    "updated": "2024-06-09 14:01:11.508Z",
    "name": "organizationaffiliation",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "o3aexhhi",
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
        "id": "ybndtldc",
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
  const collection = dao.findCollectionByNameOrId("kfiny3s8mplgi5k");

  return dao.deleteCollection(collection);
})
