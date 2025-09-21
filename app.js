// Ejercicio 1

function C1() {
    let capital = Number(document.getElementById('capital').value);
    if (capital > 0){
    let ganancia = capital * 0.02;
    let total = ganancia + capital;
    document.getElementById('calI').innerText = "Ganancia: $" + ganancia + ", el sueldo total es: $" + total;
    }
    else{
        document.getElementById('calI').innerText = "Inserte una cantidad valida";
    }
}

// Ejercicio 2

function C2() {
    let sueldob = Number(document.getElementById('sueldob').value);
    let pv = Number(document.getElementById('pv').value);
    let sv = Number(document.getElementById('sv').value);
    let tv = Number(document.getElementById('tv').value);

    if (sueldob > 0) {

        if (pv > 0) {
            
            if (sv > 0) {
                
                if (tv > 0) {
            
                    let comision = (pv + sv + tv) * 0.10;
                    let total = sueldob + comision;
                    document.getElementById('cal2').innerText = "La comisión es: $" + comision + ", Total: $" + total;

                }
                else{
                    document.getElementById('cal2').innerText = "Datos no validos";
                }

            }
            else{
                document.getElementById('cal2').innerText = "Datos no validos";
            }

        }
        else{
            document.getElementById('cal2').innerText = "Datos no validos";
        }

    }
    else{
        document.getElementById('cal2').innerText = "Datos no validos";
    }
}

// Ejercicio 3

function C3() {
    let compra = Number(document.getElementById('compra').value);
    if(compra > 0){
        let compraf = compra - (compra * 0.15);
        document.getElementById('cal3').innerText = "Costo con descuento: $" + compraf;
    }
    else{
        document.getElementById('cal3').innerText = "Datos no validos";
    }
}

// Ejercicio 4

function C4() {
    let cali1 = Number(document.getElementById('cali1').value);
    let cali2 = Number(document.getElementById('cali2').value);
    let cali3 = Number(document.getElementById('cali3').value);
    let calie = Number(document.getElementById('calie').value);
    let calitf = Number(document.getElementById('calitf').value);

    if (cali1 >= 0 && cali1 <= 10 && cali2 >= 0 && cali2 <= 10 && cali3 >= 0 && cali3 <= 10 && calie >= 0 && calie <= 10 && calitf >= 0 && calitf <= 10){
        let promediop = (cali1 + cali2 + cali3)/3;
        let calif = promediop*0.55 + calie*0.3 + calitf*0.15;

        document.getElementById('cal4').innerText = "Calificacion final: " + calif;
    }
    else{
        document.getElementById('cal4').innerText = "Datos no validos";
    }
}

// Ejercicio 5

function C5() {
    let anna = Number(document.getElementById('anna').value);
    let anac = Number(document.getElementById('anac').value);
    let edad = anac - anna;

    if (anna <= 0 || anac <= 0 || edad <= 0){
        if(edad > 100){
            document.getElementById('cal5').innerText = "Edad: " + edad + " años, ¿Eres un elfo, fantasma o irreal?";
        }
        else{
            document.getElementById('cal5').innerText = "Edad: " + edad + " años";
        }
    }
    else {
        document.getElementById('cal5').innerText = "Datos invalidos";
    }

}

// Ejercicio 6

function C6() {
    let entrada = document.getElementById('numeros').value.split(",");
    let numeros = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"];
    let salida = entrada.map(p => {
      let i = numeros.indexOf(p.trim().toLowerCase());
      return i === -1 ? -1 : i;
    });
    document.getElementById('cal6').innerText = "Resultado: " + salida.join(", ") ;
  }

// Ejercicio 7

function C7() {
    let horas = Number(document.getElementById('horas').value);
    let pagoxh = Number(document.getElementById('pagoxh').value);
    let total;
    if(horas > 0 && pagoxh > 0) {
        if (horas <= 40 && horas > 0) {
            total = horas * pagoxh;
            } 
            else {
                let extras = horas - 40;
                if (extras <= 8 && extras > 0) {
                    total = (pagoxh*40) + (extras*pagoxh*2);
                } else {
                    total = (pagoxh*40) + (pagoxh*2*8) + ((extras-8)*pagoxh*3);
                }
            }
            document.getElementById("cal7").innerText = "Pago total: $" + total;
    }
    else {
        document.getElementById('cal7').innerText = "Datos no validos";
    }
}

// Ejercicio 8

function C8() {
    let salario = Number(document.getElementById('salario').value);
    let tiempoan = document.getElementById('tiempoan').value;
    let utilidad;
    if (tiempoan === "menos1") {
        utilidad = salario * 0.05;
    }
    if (tiempoan === "1a2") {
        utilidad = salario * 0.07;
    }
    if (tiempoan === "2a5") {
        utilidad = salario * 0.1;
    }
    if (tiempoan === "5a10") {
        utilidad = salario * 0.15;
    }
    if (tiempoan === "10mas") {
        utilidad = salario * 0.2;
    }
    document.getElementById('cal8').innerText = "Utilidad: $ " + utilidad;
}

// Ejercicio 9

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const comentarios = document.getElementById("comentarios");
const acepto = document.getElementById("acepto");
const form = document.getElementById("registro");
const cal9 = document.getElementById("cal9");

// Errores

const errornombre = document.getElementById("errornombre");
const erroremail = document.getElementById("erroremail");
const errorcontraseña = document.getElementById("errorcontraseña");
const errorcomentarios = document.getElementById("errorcomentarios");
const erroracepto = document.getElementById("erroracepto");

// Email y contraseña

const emailcar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contraseñacar = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

// Validacion de los elementos

function validarnom() {
const val = nombre.value.trim();
if (val === "") {
    errornombre.innerText = "El nombre es OBLIGATORIO.";
    return false;
}
errornombre.innerText = "";
return true;
}

function validarema() {
const val = email.value.trim();
if (val === "") {
    erroremail.innerText = "El email es OBLIGATORIO.";
    return false;
}
if (!emailcar.test(val)) {
    erroremail.innerText = "El email no cumple con las caracteristicas deseadas";
    return false;
}
erroremail.innerText = "";
return true;
}

function validarcon() {
const val = contraseña.value;
if (val.length < 6) {
    errorcontraseña.innerText = "La contraseña debe de ser de al menos 6 caracteres.";
    return false;
}
if (!contraseñacar.test(val)) {
    errorcontraseña.innerText = "La contraseña debe contener letras minúsculas, mayúsculas y un dígito numerico.";
    return false;
}
errorcontraseña.innerText = "";
return true;
}

function validarcom() {
const val = comentarios.value.trim();
if (val === "") {
    errorcomentarios.innerText = "Los comentarios son OBLIGATORIOS.";
    return false;
}
if (val.length > 50) {
    errorcomentarios.innerText = "Los comentarios deben de ser de maximo 50 caracteres.";
    return false;
}
errorcomentarios.innerText = "";
return true;
}

function validarace() {
if (!acepto.checked) {
    erroracepto.innerText = "Debes aceptar las condiciones del servicio.";
    return false;
}
erroracepto.innerText = "";
return true;
}

// Validar Blur
nombre.addEventListener("blur", validarnom);
email.addEventListener("blur", validarema);
contraseña.addEventListener("blur", validarcon);
comentarios.addEventListener("blur", validarcom);
acepto.addEventListener("change", validarace);

// Validar envio
form.addEventListener("submit", function(e) {
e.preventDefault();

const valinom = validarnom();
const valiema = validarema();
const valicon = validarcon();
const valicom = validarcom();
const valiace = validarace();

if (valinom && valiema && valicon && valicom && valiace) {
    cal9.innerText = "Formulario válido.";
} else {
    cal9.innerText = "Formulario inválido.";
}
});

// Ejercicio 10

function removeScriptTags(html) {
    if (!html) return html;
    return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
    }
    document.getElementById("eliminars").addEventListener("click", function() {
        const codigo = document.getElementById("codigo").value;
        const codigof = removeScriptTags(codigo);
    document.getElementById("cal10").innerText = codigof;
    });