const pantalla = document.getElementById("pantalla");
const caracteresValidos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", ".", "(", ")",];

function agregar(valor){
    pantalla.value+=valor;
}
function clean(){
    pantalla.value="";
}
function borrar(){
    pantalla.value= pantalla.value.slice(0, -1); 
}
function calcular(){
    pantalla.value= eval(pantalla.value);
}
function soloNumeros(t,event){
    /* console.log(event.key);  */
    if(caracteresValidos.includes(event.key)){
        pantalla.value+=event.key; 
    }else if(event.key == "Enter"){
        calcular();
    }else if(event.key == "Backspace"){
        borrar();
    }
}