let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor"));

    console.log(typeof(numeroUsuario))

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? `vez` : `veces`}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor")
        } else {
            alert("El número secreto es mayor");
        }
        //intentos = intentos + 1;
        //intentos += 1;
        //intenos += 1;
        intentos++;
        palabraVeces = "veces";
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}