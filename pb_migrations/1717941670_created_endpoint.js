/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wf84g2eyyy6yza7",
    "created": "2024-06-09 14:01:10.670Z",
    "updated": "2024-06-09 14:01:10.670Z",
    "name": "endpoint",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ycwozgyj",
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
        "id": "9auahapj",
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
  const collection = dao.findCollectionByNameOrId("wf84g2eyyy6yza7");

  return dao.deleteCollection(collection);
})
