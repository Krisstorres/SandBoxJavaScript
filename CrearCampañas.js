async function crearCampaña(req,res) {
    var tok=await createToken();
    tok=tok.toString();
    //                                                  QUERY PARA BUSCAR EL COLUMN NAME POR NOMBRE DE CONTACT LIST {
    const jsonData = fs.readFileSync(jsonFile, 'utf8');
    const jsonObject = JSON.parse(jsonData);
    
    //                                                  contactName='Actualizar valor '
                                                      //console.log('Callist Display = '+calllistDisplayNames.toString().replace("|","").replace("|",""));
                                                      //console.log('Callist con split  = '+m);
    
    const filtrarResult=await filtarDatos();//         contact con respaldo en la tas tablas GT 
    const filtro=[];
    const matchNames = {};      
    const tablasSinRepetir=[fs.readFileSync(sinRepetir,'utf-8')];
    let i = 0;
    let n = 0;
    let contador = 0;
    let exito = 0;
    let saltado=0;
    let error=0;
    let counnt =0;
    filtrarResult.forEach(col =>{
      filtro.push(col)   
      counnt+=1;
    })
    
    console.log('largo total areeglo = '+counnt)
    for(let index = 0 ; index < counnt ;index++){
      
      if ((index + 1) % 100 === 0){
        console.log('Esperando 1 minuto cada 100 iteraciones');
        await new Promise(resolve => setTimeout(resolve, 60 * 1000));
      }else{
        try{
          contador += 1;
          //filtro[index].TABLE_NAME
          const jsonData = fs.readFileSync(tablas_procesadas, 'utf8');
          const jsonObject = JSON.parse(jsonData);
          if(  !JSON.stringify(jsonObject).toString().includes(filtro[index].TABLE_NAME)  ){
            var columName=''
            if(filtro[index].COLUMN_NAME.includes('I3_')){
              columName='TELEFONO';
            }
            client.setEnvironment(platformClient.PureCloudRegionHosts.ca_central_1);
            client.setAccessToken(tok);
            let apiInstance = new platformClient.OutboundApi();
    //        crear una nueva columna llamada zone tipo texto 
            var colDataType=JSON.stringify(filtro[index].DATA_TYPE) =='NUMBER' ? "NUMERIC" : JSON.stringify(filtro[index].DATA_TYPE); 
            colDataType=JSON.stringify(filtro[index].DATA_TYPE) =='NVARCHAR2'  ? "TEXT": JSON.stringify(filtro[index].DATA_TYPE);
            colDataType=JSON.stringify(filtro[index].DATA_TYPE) =='VARCHAR2'   ? "TEXT": JSON.stringify(filtro[index].DATA_TYPE);
            colDataType=JSON.stringify(filtro[index].DATA_TYPE) =='DATE'       ? "TIMESTAMP": JSON.stringify(filtro[index].DATA_TYPE);
            colDataType=JSON.stringify(filtro[index].DATA_TYPE) =='RAW'       ? "NUMERIC": JSON.stringify(filtro[index].DATA_TYPE);
            colDataType=JSON.stringify(filtro[index].DATA_TYPE) =='CLOB'       ? "TEXT": JSON.stringify(filtro[index].DATA_TYPE);
            colDataType=JSON.stringify(filtro[index].DATA_TYPE) !=' '       ? "TEXT": JSON.stringify(filtro[index].DATA_TYPE);
            var   contactName='TMK_PA_TIPOFORMULARIO';
            
    
            var nombreColumna=columName !='valor' ? filtro[index].COLUMN_NAME : 'valor';
            colDataType=nombreColumna == "TELEFONO"? 'NUMERIC': colDataType=colDataType;
            let dataLenght=colDataType == "TEXT" ? 740 : filtro[index].DATA_LENGTH;
      
          
            const jsonData = fs.readFileSync(jsonFile, 'utf8');
            const jsonObject = JSON.parse(jsonData);
            var contactName = filtro[index].TABLE_NAME;
            const query = "$.DIALERCONFIG2.DIALEROBJECT[?(@._attributes.name =="+"'"+contactName+"'"+")]..contactcolumns._attributes.display_name";
            const calllistDisplayNames = JSONPath({ json: jsonObject, path: query });
            const columNames=[calllistDisplayNames.toString().slice(1, -1).split('|')];
            const logn=calllistDisplayNames.length;
            let phoneColumnsEspecifications= {
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
            
             
          
            apiInstance.postOutboundContactlists(body).then((data) => {
              //SI TODO SALE BIEN => 
              exito+=1;
              let datte=new Date().toLocaleString();
              UpdateLog('Contact list  creada-------------------='+datte);  
              UpdateFile(filtro[index].TABLE_NAME);//guardando nombre de tabla en archivo 
              console.log(`postOutboundContactlists success! data: ${JSON.stringify(data, null, 2)}`);
              UpdateLog('Nombre De Contact List: ');
              UpdateLog(filtro[index].TABLE_NAME);
              UpdateLog('Request Completo { ');
              UpdateLog(JSON.stringify(data,null,2));
              UpdateLog('Contact list  creada-------------------='+datte);  
              
              
                
            }).catch((err) => {
              error+=1;
              let dattte=new Date().toLocaleString();
              UpdateLog('Request ERROR-------------------='+dattte);         
              UpdateLog('Error ='+err);
              UpdateLog(body);
              UpdateLog('Request ERROR-------------------='+dattte);
              console.log("There was a failure calling postOutboundContactlists");
              console.error(err);
             
            });
          
            //Si Todo sale bien => 
         
            
    
          }else{
            console.log('Tabla procesada ! \nSaltando proceso');
            saltado+=1;
            continue;
          }// VERIFICADOR DE EXISTENCIA EN TABLAS PROCESADAS 
          await new Promise(resolve => setTimeout(resolve, 20 * 1000));//30
        }catch(e){
          error+=1;
          let dattte=new Date().toLocaleString();
          UpdateLog('Request ERROR-------------------='+dattte);         
          UpdateLog('Error DE CODIGO  ='+e);
          UpdateLog('Request ERROR-------------------='+dattte);
          console.error(e);
          console.log('Error = '+e)
    
        };//TRY CATRCH PRINCIPAL 
      };//if controlador de pausas 
    }//For principal
    console.log('Proceso finalizado con: \nTablas procesadas con exito ='+exito+"\nTablas Saltadas ="+saltado+"\nErrores ="+error);
    UpdateLog('Proceso finalizado con: \nTablas procesadas con exito ='+exito+"\nTablas Saltadas ="+saltado+"\nErrores ="+error);
    };