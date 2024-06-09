/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lnfr7tdj8l0x02r",
    "created": "2024-06-09 14:01:11.459Z",
    "updated": "2024-06-09 14:01:11.459Z",
    "name": "operationdefinition",
    "type": "base",
    "system": true,
    "schema": [
      {
        "system": false,
        "id": "0jt53svq",
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
        "id": "iznmzd3f",
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
  const collection = dao.findCollectionByNameOrId("lnfr7tdj8l0x02r");

  return dao.deleteCollection(collection);
})
