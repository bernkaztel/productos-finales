
// Creamos la función llamada "valid credit card". 
var validCreditCard = function (cardNumber) 
    { 
        //Verificamos que el número proporcionado por el usuario no sea un string vacío.
        if (cardNumber.length === 0) 
        {
         //En caso de que esté vacío enviamos un alert diciendo que el input no es válido.
         alert("No has ingresado un input válido");  
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
                {  //Multiplicamos todos los números del nuevo array por dos.
                    var multiplyForTwo = pairReversedCardNumbers[i] * 2
                    //Revisamos si el resultado de la multiplicación es menor a diez
                    if (multiplyForTwo < 10) 
                        {
                            //Si es menor a diez, el elemento será igual al resultado de la multiplicación.
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
                              //Creamos los valores de los dos números que deben de sumarse.
                              var num1  = parseInt(stringGreaterThanTen.charAt(0));
                              var num2  = parseInt(stringGreaterThanTen.charAt(1));
                              //Sacamos la suma de ambos
                              var sumNumbers = (num1 + num2);
                              //El elemento del array será igual a la suma de ambos elementos.
                              pairReversedCardNumbers[i] = (sumNumbers);
                                }  
                }
            //Creamos un nuevo array para contener los números no pares del array. 
            var noPairReversedCardNumbers = [];
            //Creamos un nuevo "for" que iterará los números de la tarjeta al revés y solo se detenga en pares.
            for (var i = 0; i < reversedCardNumbers.length; i +=2) 
                {
                //Introducimos los valores no pares al nuevo array.
                noPairReversedCardNumbers.push(reversedCardNumbers[i])   
                }
            //Convertimos el array de no pares a string
            var stringNoPairReversedCardNumbers = noPairReversedCardNumbers.join();
            //Creamos la variable que va a guardar la suma de los números no pares. 
            var sum = 0; 
            //Creamos un for para iterar en el contenido del array.
            for (var i =0; i < stringNoPairReversedCardNumbers.length; i +=2)
                {
                    //Creamos la variable num que alojará los elementos del array que van iteránose y la convertimos a número.
                    var num =parseInt(stringNoPairReversedCardNumbers.charAt(i)); 
                    //Añadimos el número a la suma
                    sum = sum + num; 
                }
            //Creamos la variable que guardará la suma de los elementos pares.
            var sum1 = 0; 
            //Creamos un for que vaya iterando por todos los elementos del array de pares.
            for (var i = 0; i < pairReversedCardNumbers.length; i++)
                {
                    //Sumamos cada uno de los elementos que va iterando el for
                    sum1 += pairReversedCardNumbers[i];
                 }
            //Sumamos el resultado de suma de elementos pares e impares.
            var totalSum = sum + sum1; 
            // Creamos la variable de mensaje 
            var message = "";
            //Hacemos un if que compruebe si la suma es divisible entre 10
            if (totalSum % 10 === 0 )
                 {
                    message = "Es válida";
                 }
               else 
                 {
                    message = "No es válida";
                 }
                }
                return message;
                };
var userinput = prompt("Coloca aquí el número de tu tarjeta");
console.log(validCreditCard(userinput));
