import fs from 'fs';
import convert from 'xml-js';
import path from 'path';
import { JSONPath } from "jsonpath-plus";

function procesarArchivos() {
  const directorioActual = process.cwd();
  const xmlPath = path.join(directorioActual, '1692636121144dialer_config.xml');
  const xmlTransformedPath = path.join(directorioActual, 'archivo.json');
  const filtra2 = path.join(directorioActual, 'filtrado.json');

  try {
    // Lee el contenido del archivo XML
    const xml = fs.readFileSync(xmlPath, 'utf-8');

    // Convierte XML a JSON
    const json = convert.xml2json(xml, { compact: true, spaces: 4 });

    // Define la consulta JSONPath
    const query = '$.DIALERCONFIG2BATCH.DIALEROBJECT[?(@._attributes.type==19)]';

    // Lee los datos transformados desde el archivo JSON
    const dataTransformed = fs.readFileSync(xmlTransformedPath, 'utf-8');

    // Ejecuta la consulta JSONPath
    const calllistObjects = JSONPath({ json: JSON.parse(dataTransformed), path: query });

    // Escribe los objetos filtrados en un archivo JSON
    fs.writeFileSync('filtrado.json', JSON.stringify(calllistObjects), 'utf-8');
    console.log('Archivo JSON creado con éxito.');

    // Escribe el JSON original en otro archivo
    fs.writeFileSync('listasDeContacto.json', json, 'utf-8');
    const datosFiltrados = fs.readFileSync(filtra2, 'utf-8');

    const query2='$..[?(@._attributes.name=="CALLBACK_GT")].contactcolumns._attributes.display_name'
    const resultadoQuery = JSONPath({ json: JSON.parse(datosFiltrados), path: query2 });

    console.log('Resultado de query:\n', resultadoQuery);
  } catch (error) {
    console.error('Error:', error);
  }
}

procesarArchivos();
