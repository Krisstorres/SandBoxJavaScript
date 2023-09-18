




function getPhoneColumns(phoneArray){
    if(!phoneArray){
        return{
            msg:"Error falta el array ! "
        };
    };
    let elementOne='';
    let elementTwo='';
    let elementThree='';

    let index2ElementOne='';
    let index2ElementTwo='';
    let index2ElementThree='';

    let index3ElementOne='';
    let index3ElementTwo='';
    let index3ElementThree='';

    let allContentOne='';
    let allContentTwo='';
    let allContentThree=''; 
    let itemSizze= 0;
    let itemSizzeTwo=0;
    let sizze=phoneArray.length;
    let itemSizzeThree=0;
    
    if(sizze == 1){
        allContentOne=phoneArray[0].split('|').toString();
        itemSizze= phoneArray[0].split('|').length;
        elementOne=phoneArray[0].split('|')[1];
        elementTwo=phoneArray[0].split('|')[2];
        elementThree= phoneArray[0].split('|')[3];    
    }if(sizze == 2){ 
        allContentOne=phoneArray[0].split('|').toString();       
        itemSizzeTwo=phoneArray[1].split('|').length;
        allContentTwo=phoneArray[1].split('|').toString();
        itemSizze= phoneArray[0].split('|').length;
        elementOne=phoneArray[0].split('|')[1];
        elementTwo=phoneArray[0].split('|')[2];
        elementThree= phoneArray[0].split('|')[3];    
        index2ElementOne=phoneArray[1].split('|')[1];
        index2ElementTwo=phoneArray[1].split('|')[2];
        index2ElementThree=phoneArray[1].split('|')[3];        
    }if(sizze >= 3 ){    
        allContentOne=phoneArray[0].split('|').toString();
        itemSizzeThree=phoneArray[2].split('|').length;
        allContentTwo=phoneArray[1].split('|').toString();
        itemSizzeTwo=phoneArray[1].split('|').length;
        allContentThree=phoneArray[2].split('|').toString();     
        itemSizze= phoneArray[0].split('|').length;
        elementOne=phoneArray[0].split('|')[1];
        elementTwo=phoneArray[0].split('|')[2];
        elementThree= phoneArray[0].split('|')[3];    
        index2ElementOne=phoneArray[1].split('|')[1];
        index2ElementTwo=phoneArray[1].split('|')[2];
        index2ElementThree=phoneArray[1].split('|')[3];  
        index3ElementOne=phoneArray[2].split('|')[1];
        index3ElementTwo=phoneArray[2].split('|')[2];
        index3ElementThree=phoneArray[2].split('|')[3];

    }
    let phoneColumns=[];
    let allNames =[];
    
    //cambiarlas a constantes 
    
    
    switch(sizze){
        case 1:
            console.log('largo 1 !');
            
            switch(itemSizze){
                case 3://1 elemento
                    
                    phoneColumns.push({"columnName":elementOne,"type": "Móvil"});
                    allNames.push(elementOne);
                    console.log('(array largo = 1)Un elemento !');
                    break;
                case 4://2 elementos
                    elementOne=phoneArray[0].split('|')[1];
                    
                    console.log('(array largo = 1) dos elementos !');
                if(elementOne == elementTwo){
                    allNames.push(elementOne,);
                    phoneColumns.push({"columnName":elementOne,"type": "Móvil"});
                    }
                    else{
                    allNames.push(elementOne,elementTwo);
                    phoneColumns.push({"columnName":elementOne,"type": "Móvil"},{"columnName":elementTwo,"type": "Móvil"});
                    }
                    break;
                case 5://3 elementos ( lo maximo )
                    console.log('(array largo = 1) tres elementos !');
                    
                    if(elementOne == elementTwo && elementOne == elementThree && elementTwo == elementThree){
                        allNames.push(elementOne);
                        phoneColumns.push({"columnName":elementOne,"type": "Móvil"});
                    }else{
                    allNames.push(elementOne,elementTwo,elementThree);
                    phoneColumns.push({"columnName":elementOne,"type": "Móvil"},{"columnName":elementTwo,"type": "Móvil"},{"columnName":elementThree,"type": "Móvil"});
                    }
                    break;
                default:
                    return{
                        msg:"Error al obtener los datos en switch case 1, itemSizze "
                    };       
            };//
        break;
        case 2:
            console.log('ARRAY Largo 2 ! ')            
            const itemSizzeAdd=itemSizze+itemSizzeTwo;
            switch(itemSizzeAdd){
                case 6 :                    
                    console.log('Ambos indices  tienen solo un elemento en su item');
                    if(elementOne == index2ElementOne){
                        console.log('Ambos elemento del indice dos y uno son iguales ');
                        allNames.push(elementOne);
                        phoneColumns.push({"columnName":elementOne,"type": "Móvil"});  
                                             
                    }else{
                    console.log('Los elementos no son iguales ! ')
                    allNames.push(elementOne,index2ElementOne);
                    phoneColumns.push({"columnName":elementOne,"type": "Móvil"},{"columnName":index2ElementOne,"type": "Móvil"});
                    }
                break; 
                case 8 :
                    console.log('Ambos inidices poseen dos elementos ');
                    
                    if(index2ElementOne != index2ElementTwo && index2ElementOne != elementOne && index2ElementOne != elementTwo ){
                        console.log('case largo  8 indexelementone es unico... almacenando !')
                        allNames.push(index2ElementOne);
                        phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});
                        if(index2ElementTwo == index2ElementThree && index2ElementTwo == elementOne && index2ElementTwo == elementTwo){
                            allNames.push(index2ElementTwo);
                            phoneColumns.push({"columnName":index2ElementTwo,"type": "Móvil"});
                        }
                     

                    }else if(index2ElementTwo != index2ElementOne && index2ElementTwo != elementOne && index2ElementTwo != elementTwo){
                        console.log('case largo  8 index2ElementTwo es unico almacenando ! ');
                        allNames.push(index2ElementTwo);
                        phoneColumns.push({"columnName":index2ElementTwo,"type": "Móvil"});                        
                        if(index2ElementOne == index2ElementThree && index2ElementOne == elementOne && index2ElementOne == elementTwo && !allNames.includes(index2ElementOne)){
                            allNames.push(index2ElementOne);
                            phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});
                        }
                    }else if(elementOne != elementTwo && elementOne != index2ElementOne && elementOne != index2ElementTwo){
                        console.log('case largo  8 elemnto one  es unico almacenando ! ');
                        allNames.push(elementOne);
                        phoneColumns.push({"columnName":elementOne,"type": "Móvil"});  
                        if(elementTwo ==  index2ElementOne && elementTwo  == index2ElementTwo){
                            allNames.push(elementTwo);
                            phoneColumns.push({"columnName":elementTwo,"type": "Móvil"})
                        }
                    }else if(elementTwo != elementOne && elementTwo != index2ElementOne && elementTwo !=index2ElementTwo){
                        console.log('case largo  8 element Two  es unico almacenando ! ');
                        allNames.push(elementTwo);
                        phoneColumns.push({"columnName":elementTwo,"type": "Móvil"});  
                        if(index2ElementOne == index2ElementTwo && index2ElementOne == elementOne){
                            allNames.push(index2ElementOne);
                            phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});
                        }
                    }else{
                        console.log('Todos los elementos son iguales ! ');
                        allNames.push(elementTwo);
                        phoneColumns.push({"columnName":elementTwo,"type": "Móvil"});  
                    };
                break; 
                case 10:
                    console.log('ambos indices tienen 3 elementos dentro de sus valors ');
                    
                    if(elementOne != elementTwo && elementOne != elementThree && elementOne != index2ElementOne && elementOne !=index2ElementTwo && elementOne != index2ElementThree ){
                        console.log(' case length 10  ELEMENTO ONE ES UNICO ! ');
                        allNames.push(elementOne);//
                        phoneColumns.push({"columnName":elementOne,"type": "Móvil"});
                        if(elementThree == elementTwo  && elementThree == index2ElementOne && elementThree == index2ElementTwo && elementThree == index2ElementThree){
                            allNames.push(elementThree);
                            phoneColumns.push({"columnName":elementThree,"type": "Móvil"})
                        }
                        
                    }else if(elementTwo != elementOne && elementTwo != elementThree && elementTwo != index2ElementOne && elementTwo != index2ElementTwo && elementTwo != index2ElementThree){
                        console.log(' case length 10  ELEMENTO two ES UNICO ! ');
                        allNames.push(elementTwo);//
                        phoneColumns.push({"columnName":elementTwo,"type": "Móvil"});
                        if(elementOne == elementThree && elementOne == index2ElementOne && elementOne == index2ElementTwo && elementOne == index2ElementThree){
                            allNames.push(elementOne);
                            phoneColumns.push({"columnName":elementOne,"type": "Móvil"})
                        }
                    } else if(elementThree != elementOne && elementThree != elementTwo && elementThree != index2ElementOne && elementThree != index2ElementTwo && elementThree != index2ElementThree){
                        console.log(' case length 10  ELEMENTO Three ES UNICO ! ');
                        allNames.push(elementThree);//
                        phoneColumns.push({"columnName":elementThree,"type": "Móvil"});
                        if(elementOne == elementTwo  && elementOne  == index2ElementOne && elementOne == index2ElementTwo && index2ElementTwo && elementOne == index2ElementThree){
                            allNames.push(elementOne);
                            phoneColumns.push({"columnName":elementOne,"type": "Móvil"})
                        }
                    }else if(index2ElementOne != elementOne && index2ElementOne != elementTwo && index2ElementOne != elementThree && index2ElementOne != index2ElementTwo && index2ElementOne !=index2ElementThree){
                        console.log(' case length 10  index2element one ES UNICO ! ');
                        allNames.push(index2ElementOne);//
                        phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});
                        if(elementThree == elementOne && elementThree == elementTwo && elementThree == index2ElementTwo && elementThree == index2ElementThree) { 
                            allNames.push(elementThree);
                            phoneColumns.push({"columnName":elementThree,"type": "Móvil"}) 
                        }

                    }else if(index2ElementTwo != elementOne && index2ElementTwo != elementTwo && index2ElementTwo != elementThree && index2ElementTwo != index2ElementOne && index2ElementTwo != index2ElementThree){
                        console.log(' case length 10  index2element TWO ES UNICO ! ');
                        allNames.push(index2ElementTwo);//
                        phoneColumns.push({"columnName":index2ElementTwo,"type": "Móvil"});
                        if(index2ElementOne == index2ElementThree && index2ElementOne == elementOne && index2ElementOne == elementTwo && index2ElementOne == elementThree){
                            allNames.push(index2ElementOne);
                            phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});
                        }
                    }else if(index2ElementThree != elementOne && index2ElementThree != elementTwo && index2ElementThree != elementThree &&  index2ElementThree != index2ElementOne && index2ElementThree != index2ElementTwo){
                        console.log(' case length 10  index2element Three ES UNICO ! ');
                        allNames.push(index2ElementThree);//
                        phoneColumns.push({"columnName":index2ElementThree,"type": "Móvil"});                                                                                                                                                
                        if(elementOne == elementTwo && elementOne == elementThree && elementOne == index2ElementOne && elementOne == index2ElementTwo){
                            allNames.push(elementOne);
                            phoneColumns.push({"columnName":elementOne,"type": "Móvil"}); 
                        };                        
                    }else{
                        console.log('Los valores son iguales guardando solo un valor ! ');

                        allNames.push(elementOne);
                        phoneColumns.push({"columnName":elementOne,"type":"Móvil"});
                    };
                default:
                    console.log('DEFAULT : ');
                    console.log('item size 1  : '+itemSizze);
                break;                    
            };//(itemSizzeAdd){
        break;
        case 3:        
            console.log('ARRAY largo 3')
            console.log('allContentOne = '+allContentOne+' allContentTwo = '+allContentTwo+' allContentThree= '+allContentThree+' ')
            if(allContentOne == allContentTwo && allContentOne == allContentThree  && allContentTwo == allContentThree){
                console.log('Case 3 : todo el contendio de los 3 indices son iguales o estan repetidos, guardando solo uno ! ');
                const allContentOneLen=phoneArray[0].split('|').length;
                const allContentTwoLen=phoneArray[1].split('|').length;
                const allContentThreeLen=phoneArray[2].split('|').length;
                switch(allContentOneLen){
                    case 3:
                        console.log('Solo posee un elemento en el indice');//
                        allNames.push(elementOne);//
                        phoneColumns.push({"columnName":elementOne,"type": "Móvil"});
                    break;
                    case 4:
                        console.log('Tiene dos elementos ');
                        if(elementOne != elementTwo){
                            allNames.push(elementOne,elementTwo);
                            phoneColumns.push({"columnName":elementOne,"type": "Móvil"},{"columnName":elementTwo,"type": "Móvil"});    
                        }else if(elementOne == elementTwo){
                            allNames.push(elementOne);
                            phoneColumns.push({"columnName":elementOne,"type": "Móvil"});    
                        }                                        
                    break;
                    case 5:
                        console.log('Tiene tres elemenetos  ');
                        if(elementOne != elementTwo && elementOne != elementThree){
                            console.log('El elemento one  es unico ! ');
                            allNames.push(elementOne);
                            phoneColumns.push({"columnName":elementOne,"type": "Móvil"});   
                            if(elementTwo == elementThree){
                                allNames.push(elementTwo);
                                phoneColumns.push({"columnName":elementTwo,"type": "Móvil"});
                            } 
                        }else if(elementTwo != elementOne && elementTwo != elementThree ){
                            console.log('El elemento two es unico ! ');
                            allNames.push(elementTwo);
                            phoneColumns.push({"columnName":elementTwo,"type": "Móvil"});  
                            if(elementThree == elementOne){
                                allNames.push(elementThree);
                                phoneColumns.push({"columnName":elementThree,"type": "Móvil"});
                            }  
                        
                        }else if(elementThree != elementOne && elementThree != elementTwo ){
                            console.log('El elemento two es unico ! ');
                            allNames.push(elementThree);
                            phoneColumns.push({"columnName":elementThree,"type": "Móvil"});                            
                            if(elementOne == elementTwo){
                                allNames.push(elementOne);
                                phoneColumns.push({"columnName":elementOne,"type": "Móvil"});
                            }
                        }else{
                            console.log('Son todos iguales  almacenando uno  ! ');
                            allNames.push(elementOne);
                            phoneColumns.push({"columnName":elementOne,"type": "Móvil"});                            
                        };
                    break;
                }//(allContentOneLen)
                switch(allContentTwoLen){
                    case 3:
                      if(!allNames.includes(index2ElementOne)){  
                        console.log('Solo posee un elemento en el indice');//
                        allNames.push(index2ElementOne);//
                        phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});

                    }
                    break;
                    case 4:
                        console.log('Tiene dos elementos ');
                        if(!allNames.includes(index2ElementOne) && !allNames.includes(index2ElementTwo)){
                            if(index2ElementOne != index2ElementTwo){
                            allNames.push(index2ElementOne,index2ElementTwo);
                            phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"},{"columnName":index2ElementTwo,"type": "Móvil"});    
                        }else if(index2ElementOne == index2ElementTwo){
                            allNames.push(index2ElementOne);
                            phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});    
                    
                        }
                    
                    }                                        
                    break;
                    case 5:
                        console.log('Tiene tres elemenetos  ');
                        if(!allNames.includes(index2ElementOne) && !allNames.includes(index2ElementTwo) &&!allNames.includes(index2ElementThree)){
                        if(index2ElementOne != index2ElementTwo && index2ElementOne != index2ElementThree){
                            console.log('El elemento one  es unico ! ');
                            
                            allNames.push(index2ElementOne);
                            phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});    
                            if(index2ElementTwo == index2ElementThree ){
                                allNames.push(index2ElementTwo);
                                phoneColumns.push({"columnName":index2ElementTwo,"type": "Móvil"});
                            }
                        }else if(index2ElementTwo != index2ElementOne && index2ElementTwo != index2ElementThree ){
                            console.log('El elemento two es unico ! ');
                            allNames.push(index2ElementTwo);
                            phoneColumns.push({"columnName":index2ElementTwo,"type": "Móvil"});    
                            if(index2ElementThree == index2ElementOne){
                                allNames.push(index2ElementThree);
                                phoneColumns.push({"columnName":index2ElementThree,"type": "Móvil"});
                            }
                        
                        }else if(index2ElementThree != index2ElementOne && index2ElementThree != index2ElementTwo ){
                            console.log('El elemento two es unico ! ');
                            allNames.push(index2ElementThree);
                            phoneColumns.push({"columnName":index2ElementThree,"type": "Móvil"});                            
                            if(index2ElementTwo == index2ElementOne ){
                                allNames.push(index2ElementTwo);
                                phoneColumns.push({"columnName":index2ElementTwo,"type": "Móvil"});

                            }
                        }else{
                            console.log('Son todos iguales  almacenando uno  ! ');
                            allNames.push(index2ElementOne);
                            phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});                            
                        };
                    }
                    break;
                }//(allContentTwoLen)
                switch(allContentThreeLen){
                    case 3:                        
                        console.log('Solo posee un elemento en el indice');//
                        if(!allNames.includes(index3ElementOne)){
                            allNames.push(index3ElementOne);//
                            phoneColumns.push({"columnName":index3ElementOne,"type": "Móvil"});
                        }
                    break;
                    case 4:
                        console.log('Tiene dos elementos ');
                        if(! allNames.includes(index3ElementOne) && !allNames.includes(index3ElementTwo)){
                            if(index3ElementOne != index3ElementTwo){
                                allNames.push(index3ElementOne,index3ElementTwo);
                                phoneColumns.push({"columnName":index3ElementOne,"type": "Móvil"},{"columnName":index3ElementTwo,"type": "Móvil"});    

                            }else if(index3ElementOne == index3ElementTwo){
                                allNames.push(index3ElementOne);
                                phoneColumns.push({"columnName":index3ElementOne,"type": "Móvil"});    
                            }                                       
                        };
                    break;
                    case 5:
                        console.log('Tiene tres elemenetos  ');
                        if(!allNames.includes(index3ElementOne) && !allNames.includes(index3ElementTwo) && !allNames.includes(index3ElementThree)){
                            if(index3ElementOne != index3ElementTwo && index3ElementOne != index3ElementThree){
                                console.log('El elemento one  es unico ! ');
                                allNames.push(index3ElementOne);
                                phoneColumns.push({"columnName":index3ElementOne,"type": "Móvil"});                                
                                if(index3ElementTwo == index3ElementThree){
                                    allNames.push(index3ElementTwo);
                                    phoneColumns.push({"columnName":index3ElementTwo,"type": "Móvil"});
                                }
                            }
                        }
                        else if(index3ElementTwo != index3ElementOne && index3ElementTwo != index3ElementThree ){
                            console.log('El elemento two es unico ! ');
                            allNames.push(index3ElementTwo);
                            phoneColumns.push({"columnName":index3ElementTwo,"type": "Móvil"});    
                            if(index3ElementOne == index3ElementThree ){
                                allNames.push(index3ElementOne);
                                phoneColumns.push({"columnName":index3ElementOne,"type": "Móvil"});

                            }
                        
                        }
                        else if(index3ElementThree != index3ElementOne && index3ElementThree != index3ElementTwo ){
                            console.log('El elemento two es unico ! ');
                            allNames.push(index3ElementThree);
                            phoneColumns.push({"columnName":index3ElementThree,"type": "Móvil"});                            
                            if(index3ElementTwo == index2ElementOne){
                                allNames.push(index3ElementTwo);
                                phoneColumns.push({index3ElementTwo});
                            }
                        }else{
                            console.log('Son todos iguales  almacenando uno  ! ');
                            allNames.push(index3ElementOne);
                            phoneColumns.push({"columnName":index3ElementOne,"type": "Móvil"});                            
                        };
                    
                    break;
                }//(allContentThreeLen

            }else{
                console.log('Los indices no tiene el mismo contenido ! ');
                
                console.log('Analizando y actualizando indices por separado \nANALIZANDO INDICE 1');
                switch(itemSizze){
                    case 3:
                        console.log('indice 1 solo tiene un elemento !');
                        allNames.push(elementOne)
                        phoneColumns.push({"columnName":elementOne,"type": "Móvil"});
                        
                    break;
                    case 4: 
                        console.log('indice 1 tiene dos elementos !');
                        if(elementOne != elementTwo){
                            allNames.push(elementOne,elementTwo);
                            phoneColumns.push({"columnName":elementOne,"type": "Móvil"},{"columnName":elementTwo,"type": "Móvil"});
                        }else{
                            allNames.push(elementOne)
                            phoneColumns.push({"columnName":elementOne,"type": "Móvil"});
                        }
                    break;
                    case 5: 
                        console.log('indice 1 tiene tres elementos !');
                        if(elementOne != elementTwo && elementOne != elementThree){
                            console.log('El elemento 1 del indice 1  se almacena ! ')
                            allNames.push(elementOne)
                            phoneColumns.push({"columnName":elementOne,"type": "Móvil"});
                            if(elementTwo==elementThree){
                                allNames.push(elementTwo);
                                phoneColumns.push({"columnName":elementTwo,"type": "Móvil"});
                            }
                        }
                        else if(elementTwo != elementOne && elementTwo != elementThree){
                            console.log('El elemento 2 del indice 1  se almacena ! ')
                            allNames.push(elementTwo)
                            phoneColumns.push({"columnName":elementTwo,"type": "Móvil"});
                            if(elementOne == elementThree ){
                                allNames.push(elementOne);
                                phoneColumns.push({"columnName":elementOne,"type": "Móvil"});
                            }
                        }
                        else if(elementThree != elementOne && elementThree != elementTwo){
                            console.log('El elemento 3 del indice 1  se almacena ! ')
                            allNames.push(elementThree)
                            phoneColumns.push({"columnName":elementThree,"type": "Móvil"});
                            if(elementTwo == elementOne){
                                allNames.push(elementTwo);
                                phoneColumns.push({"columnName":elementTwo,"type": "Móvil"});
                            }
                        }else{
                            console.log('Todos los elementos son iguales ! ');
                            allNames.push(elementThree)
                            phoneColumns.push({"columnName":elementThree,"type": "Móvil"});                    
                        };
                        
                    break;
                 
                };//(itemSizze)
                switch(itemSizzeTwo){                    
                    
                    case 3:
                        console.log('ANALIZANDO INDICE 2');
                        console.log('indice 2 solo tiene un elemento !');
                        if(!allNames.includes(index2ElementOne)){
                        allNames.push(index2ElementOne)
                        phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});                            
                        }else{
                            console.log('ARRAY 3 CASE 3 Nombre repetido, saltando ! ');
                        }
                    break;
                    case 4:                     
                        console.log('indice 2 tiene dos elementos !');
                        console.log('ANALIZANDO INDICE 2');
                        if(!allNames.includes(index2ElementOne) && !allNames.includes(index2ElementTwo)){
                            if(index2ElementOne != index2ElementTwo){
                                allNames.push(index2ElementOne,index2ElementTwo);
                                phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"},{"columnName":index2ElementTwo,"type": "Móvil"});                            
                            }else{
                                console.log('son iguales evitando duplicados ! ');
                                allNames.push(index2ElementOne);
                                phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});                            
                            }                            
                        }else{
                            console.log('ARRAY 3 CASE 3 Nombre repetido, saltando ! ');
                            }
                    break;
                    case 5:
                        console.log('indice 2 tiene tres elementos !');
                        console.log('ANALIZANDO INDICE 2');
                        if(!allNames.includes(index2ElementOne) && !allNames.includes(index2ElementTwo) && !allNames.includes(index2ElementThree)){
                            if(index2ElementOne != index2ElementTwo && index2ElementOne != index2ElementThree){
                                console.log('El elemento index2Element One es unico ');
                                allNames.push(index2ElementOne);
                                phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});}
                                if (index2ElementTwo == index2ElementThree ){
                                    allNames.push(index2ElementTwo);
                                    phoneColumns.push({"columnName":index2ElementTwo,"type": "Móvil"})
                                }
                            }else if(index2ElementTwo != index2ElementOne && index2ElementTwo != index2ElementThree){
                                console.log('El elemento index2Element two es unico ');
                                allNames.push(index2ElementTwo);
                                phoneColumns.push({"columnName":index2ElementTwo,"type": "Móvil"});
                                if(index2ElementThree == index2ElementOne){
                                    allNames.push(index2ElementThree);
                                    phoneColumns.push({index2ElementThree})
                                }
                            }else if(index2ElementThree != index2ElementOne && index2ElementThree != index2ElementTwo ){
                                console.log('El elemento index2Element three es unico ');
                                allNames.push(index2ElementThree);
                                phoneColumns.push({"columnName":index2ElementThree,"type": "Móvil"});
                                if(index2ElementOne == index2ElementTwo ){
                                    allNames.push(index2ElementOne);
                                    phoneColumns.push({"columnName":index2ElementOne,"type": "Móvil"});
                                }
                            }
                        else{
                            console.log('todos los elementos son iguales, Almacenando solo un elemeneto ! ! ')
                            allNames.push(index2ElementThree);
                            phoneColumns.push({"columnName":index2ElementThree,"type": "Móvil"});
                        }
                    break;
                };//(itemSizzeTwo){
                switch(itemSizzeThree){
                    case 3:
                        console.log('ANALIZANDO INDICE 3');
                        console.log('indice 3 solo tiene un elemento !');
                        if(!allNames.includes(index3ElementOne)){
                            allNames.push(index3ElementOne);
                            phoneColumns.push({"columnName":index3ElementOne,"type": "Móvil"});
                        }                    
                    break;
                    case 4:
                        
                        console.log('ANALIZANDO INDICE 3');
                        console.log('indice 3 tiene dos elementos !');
                        if(!allNames.includes(index3ElementOne) &&! allNames.includes(index3ElementTwo)){
                            if(index3ElementOne != index3ElementTwo ){
                                allNames.push(index3ElementOne,index3ElementTwo);
                                phoneColumns.push({"columnName":index3ElementOne,"type": "Móvil"},{"columnName":index3ElementOne,"type": "Móvil"});
                            }else{
                                allNames.push(index3ElementOne);
                                phoneColumns.push({"columnName":index3ElementOne,"type": "Móvil"});
                            }
                        };
                    break;
                    case 5:
                        
                        console.log('indice 3 tiene tres elementos !');                
                        console.log('ANALIZANDO INDICE 3');
                        if(!allNames.includes(index3ElementOne) && !allNames.includes(index3ElementTwo) &&!allNames.includes(index3ElementThree) ){
                            if(index3ElementOne != index3ElementTwo && index3ElementOne != index3ElementThree ){
                                console.log('EL elemento index 3 Element One es unico ! ');
                                allNames.push(index3ElementOne);
                                phoneColumns.push({"columnName":index3ElementOne,"type": "Móvil"});
                                if(index3ElementTwo == index3ElementThree){
                                    allNames.push(index3ElementTwo);
                                    phoneColumns.push({"columnName":index3ElementTwo,"type": "Móvil"})
                                }
                            }else if(index3ElementTwo != index3ElementOne && index3ElementTwo != index3ElementThree){
                                console.log('EL  index 3 Element TWO es unico ! ');
                                allNames.push(index3ElementTwo);
                                phoneColumns.puss({"columnName":index3ElementTwo,"type": "Móvil"});
                                if(index3ElementOne == index3ElementThree){
                                    allNames.push(index3ElementOne);
                                    phoneColumns.push({"columnName":index3ElementOne,"type": "Móvil"})
                                }

                            }else if(index3ElementThree != index3ElementOne && index3ElementThree != index3ElementTwo){
                                console.log('EL  index 3 Element Three es unico ! ');
                                allNames.push(index3ElementThree);
                                phoneColumns.push({"columnName":index3ElementThree,"type": "Móvil"});
                                if(index3ElementTwo == index3ElementOne){
                                    allNames.push(index3ElementTwo);
                                    phoneColumns.push({"columnName":index3ElementTwo,"type": "Móvil"});
                                }
                            }else{
                                console.log('Todos los elementos son iguales, almacenando solo un elemento !  ')
                                allNames.push(index3ElementThree);
                                phoneColumns.push({"columnName":index3ElementThree,"type": "Móvil"});
                            }
                        }
                    break;
                };//switch(itemSizzeThree)
            
        break;
    }
   
    }
    return{ allNames,phoneColumns }; 
};//case 3 ok
const arrty=['|Telefono1|Telefono1|Telefono1|','|Telefono1|Telefono1|Telefono2|'];
const resutlado=getPhoneColumns(arrty);
console.log('Entrada = '+arrty)
console.log(resutlado.allNames);
console.log(resutlado.phoneColumns);
