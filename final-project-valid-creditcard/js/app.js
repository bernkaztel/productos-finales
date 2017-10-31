
// Creamos la función llamada "valid credit card". 
var validCreditCard = function (cardNumber) 
    { 
        //Verificamos que el número proporcionado por el usuario no sea un string vacío.
        if (cardNumber.length === 0) 
        {
         //En caso de que esté vacío enviamos un alert diciendo que el input no es válido.
         alert("No has ingresado un input váliido");  
        }
        //Si no es un string vacío, se sigue ejecutando la función.
        else 
        { 
            // Creamos un array vacío donde se introducirán los numeros de la tarjeta.
            var cardNumbersArray = []; 
            //Se crea un for que vaya iterando por todos los carácteres proporcionados.
            for (var i=0; i < cardNumber.length; i++) 
                {
                //Introducimos al interior del nuevo array cada uno de los carácteres.
                cardNumbersArray[i] = cardNumber.charAt(i);
                }
            // Mediante la función reverse, volteamos los números del array. 
            var reversedCardNumbers = cardNumbersArray.reverse();
            //Creamos un nuevo array que contendrá los numeros en posición par.
            var pairReversedCardNumbers = [];
            //Creamos un for, que vaya seleccionando la posición impar (números pares) del array.
            for (var i = 1; i < reversedCardNumbers.length; i += 2) 
                {
                //Introducimos dentro del nuevo array los números que se encuentren en posicón impar (números pares).
                pairReversedCardNumbers.push(reversedCardNumbers[i]);
                }
             //Creamos un for que vaya multiplicando todos los elementos del nuevo array.
             for (var i =0; i < pairReversedCardNumbers.length; i++) 
                {   //Multiplicamos todos los números del nuevo array por dos.
                    var multiplyForTwo = pairReversedCardNumbers[i] * 2
                    if (multiplyForTwo < 10) 
                        {
                         pairReversedCardNumbers[i] = multiplyForTwo;
                        }
                    //Verificamos si  el resultado de la multiplicación es mayor a diez.
                    else  if (multiplyForTwo >= 10) 
                        {
                            //Creamos un nuevo array que contendrá los números que son mayores a diez.
                            var greaterThanTen = []; 
                            //Introducimos los números mayores a diez.
                            greaterThanTen.push(multiplyForTwo);
                              //Convertimos el Array greaterThanTen en un string. 
                              var stringGreaterThanTen = greaterThanTen.join();
                              //Creamos los valores de los dos números que deben de sumarse
                              var num1  = parseInt(stringGreaterThanTen.charAt(0));
                              var num2  = parseInt(stringGreaterThanTen.charAt(1));
                              //Sacamos la suma de ambos
                              var sumNumbers = (num1 + num2);
                              pairReversedCardNumbers[i] = (sumNumbers);
                                }
                        }
                //Sumamos el array que contiene los números en posición par, después de las sustituciones.
                 var sumPairPosition = pairReversedCardNumbers
                //Sumamos el array que contiene los números en posición impar.
                var sumEvenPosition=  "";
                //Sumamos ambos arrays
                var sumResult = "";
                // Verificamos con un If si la suma de ambos números es divisible entre 10. 
                if (sumResult % 10 === 0) 
                    {
                        return true;
                    }
                    else 
                    {
                        return false;
                    }
                }
        
                };
var userinput = prompt("Coloca aquí el número de tu tarjeta");
console.log(validCreditCard(userinput));
