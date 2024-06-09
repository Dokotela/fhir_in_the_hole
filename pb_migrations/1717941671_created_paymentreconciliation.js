/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "38egrdzm83nxbei",
    "created": "2024-06-09 14:01:11.618Z",
    "updated": "2024-06-09 14:01:11.618Z",
    "name": "paymentreconciliation",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "p5xcfqti",
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
        "id": "nfq3rzf2",
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
  const collection = dao.findCollectionByNameOrId("38egrdzm83nxbei");

  return dao.deleteCollection(collection);
})
