//SIMULADOR PARA CALCULAR A QUÉ PAQUETE BANCARIO PUEDE ACCEDER UN CLIENTE SEGUN SU SUELDO.

let nombre = prompt("Por favor, ingrese su nombre:")
alert("¡Bienvenidx a nuestro simulador de paquetes bancarios, " + nombre + "! Comencemos.")

function calculoPaquete() {
    const sueldo = parseInt(prompt("Por favor, ingrese su sueldo"))
   
    if(sueldo >= 195000){
        alert ("Usted puede adquirir el paquete de: Infinity Black")

    }else if(sueldo >= 135000 && sueldo < 195000 ){
        alert ("Usted puede adquirir el paquete de: Infinity Platinum")

    }else if(sueldo >= 70000 && sueldo < 135000 ){
        alert ("Usted puede adquirir el paquete de: Infinity Gold")
        
    }else if(sueldo >= 60000 && sueldo < 70000 ){
        alert ("Usted puede adquirir el paquete de: Infinity 1")
        
    }else if(sueldo >= 40000 && sueldo < 60000 ){
        alert ("Usted puede adquirir el paquete de: Super Cuenta 3")
        
    }else if(sueldo >= 5000 && sueldo < 40000){
        alert ("Usted puede adquirir el paquete de: Super Cuenta")
        

    }else{
        alert("No cumple con los requerimientos mínimos para adquirir un paquete bancario")
    }
  
}


//Ciclo

do{
    calculoPaquete();
} while(confirm("¿Desea simular otro sueldo?"));

    alert("Gracias por utilizar nuestro simulador, " + nombre + ". ¡Que tenga buen día!")



