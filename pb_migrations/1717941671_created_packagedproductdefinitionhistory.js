/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rmazfs0ja0loszp",
    "created": "2024-06-09 14:01:11.539Z",
    "updated": "2024-06-09 14:01:11.539Z",
    "name": "packagedproductdefinitionhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "gugazoir",
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
        "id": "vt2w2atj",
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
  const collection = dao.findCollectionByNameOrId("rmazfs0ja0loszp");

  return dao.deleteCollection(collection);
})
