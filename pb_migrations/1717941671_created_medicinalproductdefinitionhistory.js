/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "smj50r5ury21xiv",
    "created": "2024-06-09 14:01:11.308Z",
    "updated": "2024-06-09 14:01:11.308Z",
    "name": "medicinalproductdefinitionhistory",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "ac3zeczn",
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
        "id": "73eoziaa",
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
  const collection = dao.findCollectionByNameOrId("smj50r5ury21xiv");

  return dao.deleteCollection(collection);
})
