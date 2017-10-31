//Función Cipher

//Por medio de un prompt, pedimos al usuario que coloque la frase que será cifrada.
var userInput = prompt("Coloca aquí el texto que vas a cifrar");

var cipher = function (textToBeCiphered) 
{ 
    // Revisamos si lo que introdujo el usuario no tiene una longitud de cero, y si su tipo es diferente a string. 
    if (textToBeCiphered.length === 0 && textToBeCiphered !== "string" ) 
    { 
        //En caso de que cumpla las condiciones, regresará un mensaje diciendo que no es válido.
        alert("No has ingresado un input válido");
    } 
    //Si no cumple las condiciones, el programa se seguirá ejecutando. 
    else 
    {
        // Creamos la variable que contendrá el texto ya cifrado.
        var cipheredText = ""; 
        // Creamos el for que iterará todos los carácteres dentro de la frase.
         for (var i =0; i < textToBeCiphered.length; i++) 
            {
            //Usando la iteración del for, obtenemos el código ASCII que corresponde al carácter actual. 
            var ASCIICodeOfIndex = textToBeCiphered.charCodeAt(i);
            //Dividimos si dicho carácter es mayúscula o minúscula
            if (ASCIICodeOfIndex >=97 && ASCIICodeOfIndex <= 127) 
                {
                   //Aplicamos la fórmula de las minúsculas.
                    var newASCIICodeOfIndex = (((ASCIICodeOfIndex- 97 + 33) % 26) + 97);
                }
            else if (ASCIICodeOfIndex >= 65 && ASCIICodeOfIndex <= 90) 
                {
                    //Aplicamos la fórmula de las mayúsculas
                    var newASCIICodeOfIndex = (((ASCIICodeOfIndex- 65 + 33) % 26) + 65);
                }
            //Con el nuevo código ASCII, obtenemos la letra a la que éste corresponde. 
            var newLetter = String.fromCharCode(newASCIICodeOfIndex);
            //Vamos introduciendo las letras cifradas dentro de la variable
            cipheredText += newLetter;
            }
    //La función regresa el texto cifrado. 
    return cipheredText;
    }
};

//Llamamos a la función 
console.log(cipher(userInput));



//Función Decipher 

//Por medio de un prompt, pedimos al usuario que coloque la frase que será decifrada.
var userInput2 = prompt("Coloca aquí el texto que vas a decifrar");

var decipher = function (textToBeDeciphered) 
{ 
    // Revisamos si lo que introdujo el usuario no tiene una longitud de cero, y si su tipo es diferente a string. 
    if (textToBeDeciphered.length === 0 && textToBeDeciphered !== "string" ) 
    { 
        //En caso de que cumpla las condiciones, regresará un mensaje diciendo que no es válido.
        alert("No has ingresado un input válido");
    } 
    //Si no cumple las condiciones, el programa se seguirá ejecutando. 
    else 
    {
        // Creamos la variable que contendrá el texto decifrado.
        var decipheredText = ""; 
        // Creamos el for que iterará todos los carácteres dentro de la frase.
         for (var i =0; i < textToBeDeciphered.length; i++) 
            {
            //Usando la iteración del for, obtenemos el código ASCII que corresponde al carácter cifrado actual.
            var ASCIICodeOfIndex = textToBeDeciphered.charCodeAt(i);
            //Dividimos si dicho carácter es mayúscula o minúscula
            if (ASCIICodeOfIndex >=97 && ASCIICodeOfIndex <= 127) 
                {
                   //Aplicamos la fórmula de las minúscpulas.
                    var newASCIICodeOfIndex = (((ASCIICodeOfIndex- 97 - 33) + 26) % 26 + 97);
                }
            else if (ASCIICodeOfIndex >= 65 && ASCIICodeOfIndex <= 90) 
                {
                    //Aplicamos la fórmula de las mayúsculas
                    var newASCIICodeOfIndex = (((ASCIICodeOfIndex- 65 - 33) + 26) % 26 + 65);
                }
            //Con el nuevo código ASCII, obtenemos la letra a la que corresponde el nuevo código ASCII. 
            var newLetter = String.fromCharCode(newASCIICodeOfIndex);
            //Vamos introduciendo las letras ya decifradas dentro de la variable
            decipheredText += newLetter;
            }
    //La función regresa el texto decifrado. 
    return decipheredText;
    }
};

//Llamamos a la función 
console.log(decipher(userInput2));