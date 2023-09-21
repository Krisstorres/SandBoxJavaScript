let phoneColumnsEspecifications=   {
    "columnName": "Telefono",
    "type": "Móvil"
  };
let allColumnNames=[
    "inin-outbound-id",
    "Prueba",
    "Telefono" ,
    "id",
    "zone",
    "nombreColumna"  
];
let commonColumnEspecifications=[
    {
        "columnName": "id", 
        "columnDataType": "NUMERIC",
        "min": 1,
        "max": 20000,
        "maxLength": 30
      }, 
      {
        "columnName": "zone", 
        "columnDataType": "TEXT",
        "min":1 ,
        "max": 20000,
        "maxLength": 250
      },
      {
        "columnName": "nombreColumna", 
        "columnDataType": "colDataType",
        "min":1 ,
        "max": 20000,
        "maxLength": 500
      }
];

let body ={
    "name": "filtro[index].TABLE_NAME",//CALLIST NAME 
    "division": {
      "id": "700acb56-0791-4af6-87b4-0d396401c646",
      "name": "Guatemala",
      "homeDivision": true,
      "selfUri": "/api/v2/authorization/divisions/700acb56-0791-4af6-87b4-0d396401c646"
    },
    "emailColumns": [],
    "phoneColumns": [// Phone Columns Especification
    phoneColumnsEspecifications
    ],
    "columnNames":// ALL COLUMN NAMES 
    allColumnNames
    ,
    "previewModeColumnName": "",
    "previewModeAcceptedValues": [],
    "attemptLimits": null,
    "automaticTimeZoneMapping": false,
    "zipCodeColumnName": null,
    "trimWhitespace": true,
    "columnDataTypeSpecifications": //ESPECIFICACIONES DE COLUMNAS NO TELEFONICAS 
    commonColumnEspecifications
};
  //console.log(JSON.stringify(body,null, 4))