//operaciones

function AreaTriangulo() {
    // Contenido del formulario
    var contenido = `
    <style>
    .formulario input[type="number"] {
        -webkit-appearance: textfield;
        margin: 0;
    }

    .formulario input[type="number"]::-webkit-inner-spin-button,
    .formulario input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
   
    <form id="formulario"  class="formulario">
     <h2>Área del triángulo</h2>
        <label for="base">Base:</label>
        <input type="number" id="base" name="base" required><br>
        <label for="altura">Altura:</label>
        <input type="number" id="altura" name="altura" required><br>
        <button type="button" onclick="calcularAreaTriangulo()">Calcular</button>
        
    </form>
`;

    document.getElementById("ejercicio1").innerHTML = contenido;
    
    
    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        calcularAreaTriangulo();
    });
}
function calcularAreaTriangulo() {
    if (validarCamposNumericos(["base", "altura"])) {
        var base = parseFloat(document.getElementById("base").value);
        var altura = parseFloat(document.getElementById("altura").value);
        var area = (base * altura) / 2;
        mostrarModal("El área del triángulo es: " + area);
    } else {
        mostrarModal("Por favor, completa todos los campos con valores numéricos válidos y mayores que cero.");
    }
}



function SumaNumeros() {
    var contenido = `
    <style>
    .formulario input[type="number"] {
        -webkit-appearance: textfield;
        margin: 0;
    }

    .formulario input[type="number"]::-webkit-inner-spin-button,
    .formulario input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
   
    <form id="formulario2" class="formulario">
     <h2>Suma de dos numeros</h2>
        <label for="numero1">Ingrese un numero: </label>
        <input type="number" id="numero1" name="numero1" required><br>
        <label for="numero2">Ingrese otro numero: </label>
        <input type="number" id="numero2" name="numero2" required><br>
        <button type="button" onclick="calcularSumaNumeros()">Calcular</button>
    </form>
`;

    document.getElementById("ejercicio2").innerHTML = contenido;

    document.getElementById("formulario2").addEventListener("submit", function(event) {
        event.preventDefault();
        calcularSumaNumeros();
    });
}

function calcularSumaNumeros() {
    if (validarCamposNumericos(["numero1", "numero2"])) {
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        var Suma = numero1 + numero2;
        mostrarModal("La suma es: " + Suma);
    } else {
        mostrarModal("Por favor, completa todos los campos con valores numéricos válidos.");
    }
}




function numeroAlCuadrado() {
    // Contenido del formulario
    var contenido = `
    <style>
    .formulario input[type="number"] {
        -webkit-appearance: textfield;
        margin: 0;
    }

    .formulario input[type="number"]::-webkit-inner-spin-button,
    .formulario input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
   
        <form id="formulario3" class="formulario">   
          <h2>Numero al Cuadrado</h2>
            <label for="numero1">Ingrese un numero: </label>
            <input type="number" id="numero1" name="numero1" required><br>
            <button type="button" onclick="calcularnumeroAlCuadrado()">Calcular</button>
        </form>
    `;
    document.getElementById("ejercicio3").innerHTML = contenido;

    document.getElementById("formulario3").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        calcularnumeroAlCuadrado();
    });
}

function calcularnumeroAlCuadrado() {
    if (validarCamposNumericos(["numero1"])) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var cuadrado = numero1 * numero1 ;

     mostrarModal("Al cuadrado es: " + cuadrado);
      } else {
        mostrarModal("Por favor, completa todos los campos con valores numéricos válidos.");
    }
}





function conversion() {
    // Contenido del formulario
    var contenido = `
    <style>
    #formulario4 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario4 input[type="number"]::-webkit-inner-spin-button,
    #formulario4 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
      
        <form id="formulario4" class="formulario"> 
         <h2>Euro a Dolar</h2>
            <label for="numero1">Ingrese un numero: </label>
            <input type="number" id="numero1" name="numero1" required><br>
            <button type="button" onclick="calcularconversion()">Calcular</button>
        </form>
    `;
    document.getElementById("ejercicio4").innerHTML = contenido;

    document.getElementById("formulario4").addEventListener("submit", function(event) {
        event.preventDefault();
        calcularconversion();
    });
}

function calcularconversion() {
    if (validarCamposNumericos(["numero1"])) {
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var Dolar = numero1 * 1.09;
        mostrarModal("En Dolares es: " + Dolar);
    } else {
        mostrarModal("Por favor, completa todos los campos con valores numéricos válidos y positivos.");
    }
}



function areaPerimetro() {
    // Contenido del formulario
    var contenido = `
    <style>
    #formulario5 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario5 input[type="number"]::-webkit-inner-spin-button,
    #formulario5 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
    
    <form id="formulario5" class="formulario">
    <h2>Perimetro y Area de un Cuadrado</h2>
        <label for="numero1">Ingrese el lado: </label>
        <input type="number" id="numero1" name="numero1" required><br>
        <button type="button" onclick="calcularareaPerimetro()">Calcular</button>
    </form>
`;
document.getElementById("ejercicio5").innerHTML = contenido;

document.getElementById("formulario5").addEventListener("submit", function(event) {
    event.preventDefault();
    calcularareaPerimetro();
});
}

function calcularareaPerimetro() {
if (validarCamposNumericos(["numero1"])) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var Area = numero1 * numero1;
    var Perimetro = numero1 * 4;
    mostrarModal("El Area es: " + Area + "\nEl Perimetro es: " + Perimetro);
} else {
    mostrarModal("Por favor, completa todos los campos con valores numéricos válidos y positivos.");
}
}





function areaVolumen() {
    // Contenido del formulario
    var contenido = `
    <style>
    #formulario6 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario6 input[type="number"]::-webkit-inner-spin-button,
    #formulario6 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
    
        <form id="formulario6" class="formulario">  
          <h2>Area y Volumen de un Cilindro</h2>
            <label for="radio">Ingrese el Radio: </label>
            <input type="number" id="radio" name="radio" required><br>
            <label for="Altura">Ingrese la Altura: </label>
            <input type="number" id="Altura" name="Altura" required><br>
            <button type="button" onclick="calcularareaVolumen()">Calcular</button>
        </form>
    `;
    document.getElementById("ejercicio6").innerHTML = contenido;

    document.getElementById("formulario6").addEventListener("submit", function(event) {
        event.preventDefault();
        calcularareaVolumen();
    });
}

function calcularareaVolumen() {
    if (validarCamposNumericos(["radio", "Altura"])) {
        var radio = parseFloat(document.getElementById("radio").value);
        var Altura = parseFloat(document.getElementById("Altura").value);
        var Area = 2 * Math.PI * Math.pow(radio, 2) + 2 * Math.PI * radio * Altura;
        var Volumen = Math.PI * Math.pow(radio, 2) * Altura;
        mostrarModal("El Area es: " + Area //+ "cm²" 
        + "\nEl Volumen es: " + Volumen //+ "cm²"
        );
    } else {
        mostrarModal("Por favor, completa todos los campos con valores numéricos válidos y positivos.");
    }
}




function areaLongitud() {
    // Contenido del formulario
    var contenido = `
    <style>
    #formulario7 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario7 input[type="number"]::-webkit-inner-spin-button,
    #formulario7 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
    
    <form id="formulario7" class="formulario">
    <h2>Area y Longitud de una circunferencia</h2>
        <label for="radio">Ingrese el Radio: </label>
        <input type="number" id="radio" name="radio" required><br>
        <button type="button" onclick="calcularareaLongitud()">Calcular</button>
    </form>
`;
document.getElementById("ejercicio7").innerHTML = contenido;

document.getElementById("formulario7").addEventListener("submit", function(event) {
    event.preventDefault();
    calcularareaLongitud();
});
}

function calcularareaLongitud() {
if (validarCamposNumericos(["radio"])) {
    var radio = parseFloat(document.getElementById("radio").value);
    var Area = Math.PI * Math.pow(radio, 2);
    var Longitud = 2 * Math.PI * radio;
    mostrarModal("El Área es: " + Area + "\nLa Longitud es: " + Longitud);
} else {
    mostrarModal("Por favor, completa todos los campos con valores numéricos válidos y positivos.");
}
}


 

function promedio() {
    // Contenido del formulario
    var contenido = `
    <style>
    #formulario8 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario8 input[type="number"]::-webkit-inner-spin-button,
    #formulario8 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
   
    <form id="formulario8" class="formulario"> 
    <h2>Promedio de 3 Numeros </h2>
        <label for="numero1">Ingrese un numero: </label>
        <input type="number" id="numero1" name="numero1" required><br>
        <label for="numero2">Ingrese un numero: </label>
        <input type="number" id="numero2" name="numero2" required><br>
        <label for="numero3">Ingrese un numero: </label>
        <input type="number" id="numero3" name="numero3" required><br>
        <button type="button" onclick="calcularpromedio()">Calcular</button>
    </form>
`;
document.getElementById("ejercicio8").innerHTML = contenido;

document.getElementById("formulario8").addEventListener("submit", function(event) {
    event.preventDefault();
    calcularpromedio();
});
}

function calcularpromedio() {
if (validarCamposNumericos(["numero1", "numero2", "numero3"])) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
    var Promedio = (numero1 + numero2 + numero3) / 3;
    mostrarModal("El promedio es: " + Promedio);
} else {
    mostrarModal("Por favor, completa todos los campos con valores numéricos válidos.");
}
}



// Condicionales



function numeroIncognita() {
    // Contenido del formulario
    var contenido = `
    <style>
    #formulario9 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario9 input[type="number"]::-webkit-inner-spin-button,
    #formulario9 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
   
    <form id="formulario9" class="formulario">
     <h2>Numero Positivo o Negativo </h2>
        <label for="numero1">Ingrese un numero: </label>
        <input type="number" id="numero1" name="numero1" required><br>
        <button type="button" onclick="examinarnumeroIncognita()">Calcular</button>
    </form>
`;
document.getElementById("ejercicio9").innerHTML = contenido;

document.getElementById("formulario9").addEventListener("submit", function(event) {
    event.preventDefault();
    examinarnumeroIncognita();
});
}

function examinarnumeroIncognita() {
var numero1 = parseFloat(document.getElementById("numero1").value);
if (numero1 > 0) {
    mostrarModal("El número ingresado es positivo");
} else if (numero1 < 0) {
    mostrarModal("El número ingresado es negativo");
} else {
    mostrarModal("El número ingresado es cero, por favor completa todos los campos con valores numéricos válidos");
}
}




function numeroMayorMenor() {
    // Contenido del formulario
    var contenido = `
    <style>
    #formulario10 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario10 input[type="number"]::-webkit-inner-spin-button,
    #formulario10 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
   
    <form id="formulario10" class="formulario">
     <h2>Numero Mayor y Menor </h2>
        <label for="numero1">Ingrese un numero: </label>
        <input type="number" id="numero1" name="numero1" required><br>
        <label for="numero2">Ingrese un numero: </label>
        <input type="number" id="numero2" name="numero2" required><br>
        <button type="button" onclick="examinarnumeroMayorMenor()">Calcular</button>
    </form>
`;
document.getElementById("ejercicio10").innerHTML = contenido;

document.getElementById("formulario10").addEventListener("submit", function(event) {
    event.preventDefault();
    examinarnumeroMayorMenor();
});
}

function examinarnumeroMayorMenor() {
if (validarCamposNumericos(["numero1", "numero2"])) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    if (numero1 > numero2) {
        mostrarModal("El mayor es: " + numero1);
    } else if (numero1 < numero2) {
        mostrarModal("El menor es: " + numero1);
    } else {
        mostrarModal("Los números ingresados son iguales");
    }
} else {
    mostrarModal("Por favor, completa todos los campos con valores numéricos válidos.");
}
}

function numeroMayorMenorentre() {
    // Contenido del formulario
    var contenido = `
    <style>
    #formulario11 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario11 input[type="number"]::-webkit-inner-spin-button,
    #formulario11 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
      
        <form id="formulario11" class="formulario"> 
         <h2>3 Numeros Mayor y Menor </h2>
            <label for="numero1">Ingrese un numero: </label>
            <input type="number" id="numero1" name="numero1" required><br>
            <label for="numero2">Ingrese un numero: </label>
            <input type="number" id="numero2" name="numero2" required><br>
            <label for="numero3">Ingrese un numero: </label>
            <input type="number" id="numero3" name="numero3" required><br>
            <button type="button" onclick="examinarnumeroMayorMenorentre()">Calcular</button>
        </form>
    `;
    document.getElementById("ejercicio11").innerHTML = contenido;

    document.getElementById("formulario11").addEventListener("submit", function(event) {
        event.preventDefault();
        examinarnumeroMayorMenorentre();
    });
}

function examinarnumeroMayorMenorentre() {
    if (validarCamposNumericos(["numero1", "numero2", "numero3"])) {
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        var numero3 = parseFloat(document.getElementById("numero3").value);

        var menor = Math.min(numero1, numero2, numero3);
        var mayor = Math.max(numero1, numero2, numero3);

        mostrarModal("El mayor es: " + mayor + "\nEl menor es: " + menor);
    } else {
        mostrarModal("Por favor, ingrese tres números válidos.");
    }
}



function sumaOResta() {
    // Contenido del formulario
    var contenido = `
    <style>
    #formulario12 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario12 input[type="number"]::-webkit-inner-spin-button,
    #formulario12 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
    
    <form id="formulario12" class="formulario">
    <h2>Sumar o restar dependiendo del numero </h2>
        <label for="numero1">Ingrese un numero: </label>
        <input type="number" id="numero1" name="numero1" required><br>
        <label for="numero2">Ingrese un numero: </label>
        <input type="number" id="numero2" name="numero2" required><br>
        <button type="button" onclick="examinarsumaOResta()">Calcular</button>
    </form>
`;
document.getElementById("ejercicio12").innerHTML = contenido;

document.getElementById("formulario12").addEventListener("submit", function(event) {
    event.preventDefault();
    examinarsumaOResta();
});
}

function examinarsumaOResta() {
if (validarCamposNumericos(["numero1", "numero2"])) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var Suma = numero1 + numero2;
    var Resta = numero1 - numero2;

    if (numero1 < numero2) {
        mostrarModal("La suma es: " + Suma);
    } else {
        mostrarModal("La resta es: " + Resta);
    }
} else {
    mostrarModal("Por favor, ingrese dos números válidos.");
}
}





function concienteEntre() {
    var contenido = `
    <style>
    #formulario13 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario13 input[type="number"]::-webkit-inner-spin-button,
    #formulario13 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
  
    <form id="formulario13" class="formulario">
      <h2>Hallar el cociente </h2>
        <label for="numero1">Ingrese un numero: </label>
        <input type="number" id="numero1" name="numero1" required><br>
        <label for="numero2">Ingrese un numero: </label>
        <input type="number" id="numero2" name="numero2" required><br>
        <button type="button" onclick="examinarconcienteEntre()">Calcular</button>
    </form>
`;
document.getElementById("ejercicio13").innerHTML = contenido;

document.getElementById("formulario13").addEventListener("submit", function(event) {
    event.preventDefault();
    examinarconcienteEntre();
});
}

function examinarconcienteEntre() {
if (validarCamposNumericos(["numero1", "numero2"])) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    if (numero2 !== 0) {
        var cociente = numero1 / numero2;
        mostrarModal("El cociente entre " + numero1 + " y " + numero2 + " es: " + cociente);
    } else {
        mostrarModal("No es posible dividir por cero. Por favor, ingrese un valor diferente para el segundo numero");
    }
} else {
    mostrarModal("Por favor, ingrese dos números válidos.");
}
}





function sumaOMultiplicacion() {
    var contenido = `
    <style>
    #formulario14 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario14 input[type="number"]::-webkit-inner-spin-button,
    #formulario14 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
   
    <form id="formulario14" class="formulario"> 
    <h2>Suma sino Multiplicacion </h2>
        <label for="numero1">Ingrese un numero: </label>
        <input type="number" id="numero1" name="numero1" required><br>
        <label for="numero2">Ingrese un numero: </label>
        <input type="number" id="numero2" name="numero2" required><br>
        <button type="button" onclick="examinarsumaOMultiplicacion()">Calcular</button>
    </form>
`;
document.getElementById("ejercicio14").innerHTML = contenido;

document.getElementById("formulario14").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    examinarsumaOMultiplicacion();
});
}

function examinarsumaOMultiplicacion() {
if (validarCamposNumericos(["numero1", "numero2"])) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var Suma = numero1 + numero2;
    var Multiplicacion = numero1 * numero2;

    if (numero1 < 0 || numero2 < 0) {
        mostrarModal("La suma es: " + Suma);
    } else {
        mostrarModal("La multiplicacion es: " + Multiplicacion);
    }
} else {
    mostrarModal("Por favor, ingrese dos números válidos.");
}
}

function añoBisiesto() {
    var contenido = `
    <style>
    #formulario15 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario15 input[type="number"]::-webkit-inner-spin-button,
    #formulario15 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>

    <form id="formulario15" class="formulario"> 
       <h2>Año Bisiesto</h2>
        <label for="numero1">Ingrese un año: </label>
        <input type="number" id="numero1" name="numero1" required><br>
        <button type="button" onclick="examinarañoBisiesto()">Calcular</button>
    </form>
`;
document.getElementById("ejercicio15").innerHTML = contenido;

document.getElementById("formulario15").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    examinarañoBisiesto();
});
}

function examinarañoBisiesto() {
if (validarCamposNumericos(["numero1"])) {
    var numero1 = parseFloat(document.getElementById("numero1").value);

    if (!isNaN(numero1)) {
        if ((numero1 % 4 === 0 && numero1 % 100 !== 0) || (numero1 % 400 === 0)) {
            mostrarModal(numero1 + " es año bisiesto.");
        } else {
            mostrarModal(numero1 + " no es un año bisiesto.");
        }
    } else {
        mostrarModal("Por favor, ingrese un año válido.");
    }
} else {
    mostrarModal("Por favor, ingrese un año válido.");
}
}


// Ccilos

function multiplos3() {
    var contenido = `
    <style>
    #formulario16 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario16 input[type="number"]::-webkit-inner-spin-button,
    #formulario16 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>

    <form id="formulario16" class="formulario">
        <h2> Multiplos de 3 </h2>
        <button type="button" onclick="examinarmultiplos3()">Ver Múltiplos</button>
    </form>
`;
document.getElementById("ejercicio16").innerHTML = contenido;

document.getElementById("formulario16").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    examinarmultiplos3();
});
}

function examinarmultiplos3() {
var multiplos = [];
for (var i = 3; i <= 100; i += 3) {
    multiplos.push(i);
}
mostrarModal("Múltiplos de 3 hasta 100: " + multiplos.join(", "));
}


function impares0a100() {
    var contenido = `
    <style>
    #formulario17 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario17 input[type="number"]::-webkit-inner-spin-button,
    #formulario17 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
 
    <form id="formulario17" class="formulario">  
     <h2>Impares de 0 hasta 100 </h2>
        <button type="button" onclick="examinarimpares0a100()">Ver Múltiplos</button>
    </form>
`;
document.getElementById("ejercicio17").innerHTML = contenido;

document.getElementById("formulario17").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    examinarimpares0a100();
});
}
function examinarimpares0a100() {
    var impares = [];
    for (var i = 1; i <= 100; i += 2) {
        impares.push(i);
    }
    mostrarModal("Números impares entre 0 y 100: " + impares.join(", "));
}


function pares0a100() {
    var contenido = `
    <style>
    #formulario18 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    

    #formulario18 input[type="number"]::-webkit-inner-spin-button,
    #formulario18 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
   
    <form id="formulario18" class="formulario">
     <h2>Pares de 0 hasta 100 </h2>
        <button type="button" onclick="examinarpares0a100()">Ver Múltiplos</button>
    </form>
`;
document.getElementById("ejercicio18").innerHTML = contenido;

document.getElementById("formulario18").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    examinarpares0a100();
});
}
function examinarpares0a100() {
    var pares = [];
    for (var i = 2; i <= 100; i += 2) {
        pares.push(i);
    }
    mostrarModal("Números pares entre 1 y 100: " + pares.join(", "));
}



function numCuadrado1a30() {
    var contenido = `
    <style>
    #formulario19 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario19 input[type="number"]::-webkit-inner-spin-button,
    #formulario19 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>

    <form id="formulario19" class="formulario">  
      <h2>Numeros cuadrados del 1 al 30 </h2>
        <button type="button" onclick="examinarnumCuadrado1a30()">Resultado</button>
    </form>
`;
document.getElementById("ejercicio19").innerHTML = contenido;

document.getElementById("formulario19").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    examinarnumCuadrado1a30();
});
}
function examinarnumCuadrado1a30() {
    var cuadrados = [];
    for (var i = 1; i <= 30; i++) {
        cuadrados.push(i * i);
    }
    mostrarModal("Cuadrados de los números del 1 al 30: " + cuadrados.join(", "));
}



function alcuadrado100() {
    var contenido = `
    <style>
    #formulario20 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario20 input[type="number"]::-webkit-inner-spin-button,
    #formulario20 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
  
    <form id="formulario20" class="formulario"> 
     <h2>Suma de los primeros 100 numeros al cuadrado </h2>
        <button type="button" onclick="examinaralcuadrado100()">Ver resultado</button>
    </form>
`;
document.getElementById("ejercicio20").innerHTML = contenido;

document.getElementById("formulario20").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    examinaralcuadrado100();
});
}
function examinaralcuadrado100() {
    var suma = 0;
    for (var i = 1; i <= 100; i++) {
        suma += i * i;
    }
    mostrarModal("La suma de los cuadrados de los primeros 100 numeros naturales es: " + suma);
}



function de1hastaelotro() {
    var contenido = `
    <style>
    #formulario21 input[type="number"] {
        -webkit-appearance: textfield; /* Chrome y Safari */
        margin: 0; /* Espaciado adicional entre los elementos */
    }

    #formulario21 input[type="number"]::-webkit-inner-spin-button,
    #formulario21 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>
    
    <form id="formulario21" class="formulario">
    <h2>Numeros comprendidos entre dos numeros naturales dados </h2>
        <label for="numero1">Ingrese un numero: </label>
        <input type="number" id="numero1" name="numero1" required><br>
        <label for="numero2">Ingrese un numero: </label>
        <input type="number" id="numero2" name="numero2" required><br>
        <button type="button" onclick="examinarde1hastaelotro()">Ver resultado</button>
    </form>
    `;
    document.getElementById("ejercicio21").innerHTML = contenido;

    document.getElementById("formulario21").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        examinarde1hastaelotro();
    });
}

function examinarde1hastaelotro() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    if (!isNaN(numero1) && !isNaN(numero2)) { //isNaN(numero1): Devuelve true si numero1 no es un número o es NaN, y false si es un número válido.
        var secuencia = []; //  !isNaN(numero1): Devuelve true si numero1 es un número válido, y false si no lo es.
        for (var i = numero1; i <= numero2; i++) {
            secuencia.push(i);
        }
        mostrarModal("Numeros comprendidos entre " + numero1 + " y " + numero2 + ": " + secuencia.join(", "));
    } else {
        mostrarModal("Por favor, ingrese dos números naturales válidos.");
    }
}

var sumaAcumulada = 0;

function sumCualqui() {
    var contenido = `
    <style>
    #formulario22 input[type="number"] {
        -webkit-appearance: textfield;
        margin: 0;
    }

    #formulario22 input[type="number"]::-webkit-inner-spin-button,
    #formulario22 input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    </style>

    <form id="formulario22" class="formulario"> 
       <h2>Suma de números</h2>
        <label for="numero1">Ingrese el primer número: </label>
        <input type="number" id="numero1" name="numero1" required><br>
        <label for="numero2">Ingrese el segundo número: </label>
        <input type="number" id="numero2" name="numero2" required><br>
        <p id="resultadoParcial"></p>
        <button type="button" onclick="agregarNumero()">Agregar</button>
        <button type="button" onclick="mostrarResultadoFinal()">Mostrar Resultado</button>
        <button type="button" onclick="reiniciarSuma()">Reiniciar Suma</button>
    </form>
`;

    document.getElementById("ejercicio22").innerHTML = contenido;
}

function agregarNumero() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        sumaAcumulada += numero1 + numero2;
        mostrarResultadoParcial("Suma parcial: " + sumaAcumulada);
    } else {
        mostrarModal("Por favor, ingrese números válidos en ambos campos.");
    }
}

function mostrarResultadoParcial(resultado) {
    document.getElementById("resultadoParcial").textContent = resultado;
}

function mostrarResultadoFinal() {
    var resultadoFinal = "La suma total es: " + sumaAcumulada;
    mostrarModal(resultadoFinal);
}

function reiniciarSuma() {
    sumaAcumulada = 0;
    mostrarResultadoParcial("La suma ha sido reiniciada.");
}

function mostrarModal(mensaje) {
    mostrarModal(mensaje); 
}