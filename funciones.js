const entrada = ['|Telefono4|Telefono1|Telefono3|', '|Telefono1|Telefono1|Telefono2|'];
const datosLimpio = entrada.join('');
const elementos = datosLimpio.split('|').filter(item => item !== '');
let elementosUnicos = [...new Set(elementos)];
elementosUnicos=elementosUnicos.sort();
for(let index in elementosUnicos){
    const item=elementosUnicos[index];
    console.log(item); 
}



