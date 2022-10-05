export const Settings = {
  "views": [
    {
      "id": "default",
      "name": "Standard",
      "is_favorite": true,
      "is_standard": true,
      "auto_apply": true,
      "created_by": "Adcubum",
      "editable": false,
      "filter_settings": [


        {
          "field_name": "description",
          "show": true
        },
        {
          "field_name": "start",
          "show": true
        },
        {
          "field_name": "end",
          "show": true
        },
        {
          "field_name": "members",
          "show": true
        }
      ],
      "filter_object": {
        "description": null,
        "start": null,
        "end": null,
        "members": null
      },
      "table_settings": [
        {
          "field_name": "id",
          "show": false,
          "sortable" : true
        },
        {
          "field_name": "display_name",
          "show": true,
          "sortable" : true
        },
        {
          "field_name": "description",
          "show": true,
          "sortable" : true
        },
        {
          "field_name": "start",
          "show": false
        },
        {
          "field_name": "end",
          "show": false
        },
        {
          "field_name": "members",
          "show": true,
          "sortable" : true
        }
      ],
      "order_by": "",
      "group_by": ""
    }


  ]
}

