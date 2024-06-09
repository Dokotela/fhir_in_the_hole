/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7kytftfkqk7wzar",
    "created": "2024-06-09 14:01:10.393Z",
    "updated": "2024-06-09 14:01:10.393Z",
    "name": "clinicalusedefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "nfpysvzg",
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
        "id": "74iheye6",
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
  const collection = dao.findCollectionByNameOrId("7kytftfkqk7wzar");

  return dao.deleteCollection(collection);
})
