let count = 0;
const pantalla = document.getElementById('pantalla');
let resultado = 0;
let parcial='';

const agregar = (valor) =>{
    
    if(count == 0 && typeof(valor) == 'number'){
        parcial = String(valor);
        pantalla.value = valor;
        
    }else{
        parcial += String(valor);
        pantalla.value += valor;
        
    }
    
    count++;
}
function borrarParam() {
    const regex = /(\d+(\.\d+)?|\+|\-|\*|\/)/g;
    const array = pantalla.value.match(regex);
    array.pop();
    pantalla.value = array.join('');
    
}



const borrarCaracter = () =>{
    pantalla.value = pantalla.value.slice(0, -1);
}
const borrarTodo = () =>{
    pantalla.value = 0;
    count = 0;
}
const especiales = (expresion) =>{
    const valor = pantalla.value;
    if (valor == 0){
        pantalla.value = 'ERROR'
    }
    if(expresion == '½'){
        resultado = valor/2;
        pantalla.value = resultado;
        count = 0;
    }
    if(expresion == 'x²'){
        resultado = valor**2;
        pantalla.value = truncarA12Digitos(resultado);
        count = 0;
    }
    if(expresion == '√x'){
        resultado = Math.sqrt(valor);
        pantalla.value = truncarA12Digitos(resultado);
        count = 0;
    }
    if(expresion == '∓'){
        resultado = valor * -1;
        pantalla.value = resultado;
    }
    
}
const calcular = () =>{
    const cuenta = eval(pantalla.value);
    resultado = truncarA12Digitos(cuenta);
    pantalla.value = resultado;
    count = 0;
}
function truncarA12Digitos(numero) {
    
    let numeroStr = numero.toFixed(20);

    
    if (numeroStr.includes('.')) {
        let [parteEntera, parteDecimal] = numeroStr.split('.');
        
        let maxDecimales = 12 - parteEntera.length;

        if (maxDecimales <= 0) {
            return parteEntera.slice(0, 12);
        }

        parteDecimal = parteDecimal.slice(0, maxDecimales);

        return parseFloat(`${parteEntera}.${parteDecimal}`);
    } else {
        
        return parseFloat(numeroStr.slice(0, 12));
    }
}