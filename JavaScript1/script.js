
//PRIMER EJRECICIO



// let name = prompt('Introduzca su nombre');
// let age = parseInt(prompt('Introduzca su edad'));

// console.log(`Hola, ${name} tienes ${age} años, y el año que viene cumplirás ${age + 1}`); 



//SECOND EXERSICE


// let figure = prompt('Introduzca la figura deseada a calcular el área: triangle, rectangle or circle');

// let base;
// let height;
// let radius;

// switch(figure){
//     case 'triangle':
//     base = prompt('Introduzca la base')    
//     height = prompt('Introduzca la altura')    
//     console.log(`El área del triángulo es ${(base * height) / 2}`);
//         break;

//     case 'rectangle':
//     base = prompt('Introduzca la base')    
//     height = prompt('Introduzca la altura')    
//     console.log(`El área del rectángulo es ${base * height}`);
//         break;
//     case 'circle':
//     radius = prompt('Introduzca el radio')    
//     console.log(`El área del círculo es ${Math.PI * Math.pow(radius,2)}`);
//         break;
//     default: console.log('La figura geométrica no es válida')
// }


//THRID EXERCISE


// let num = parseInt(prompt('Introduzca un número'));

// for(i = 1; i <= num; i++){
//     if(i % 2 != 0){
//         console.log(i + ' Es impar');
//     }else{
//         console.log(i + ' Es par');
//     }
// }

//FOURTH EXERCISE

// let num = parseInt(prompt('Introduzca el número'));

// for(i = 2; i <= num; i++){
//     if(num % i == 0){
//         console.log(`${num} / ${i} = ${num / i}`)
//     }
// }


//FIFTH EXERCIS

// let num = parseInt(prompt('Introduzca su número'));
// let result = 1
// 
// for(i = num; i > 0; i--){
//     result *= i
//}
//console.log(`El factorial de ${num} es igual a ${result}`);


//SIXTH EXERCISE

//let suma = 0;
//let cont = 0;
//
//while(suma < 50){
//    suma += parseInt(prompt('introduzca el número de la suma'));
//    cont++
//}
//
//console.log(`El resultado de la suma es ${suma}`);
//console.log(`El totald de números introducidos es ${cont}`);


//SEVENTH EXERCISE

//const num = [1, 59, 70, 42, 88];
//
//let even = ['']
//let odd = ['']
//
//for(const numbers of num){
//    let ran =  Math.round(Math.random() * 10 + 1)
//    const result = numbers * ran;
//
//    console.log(`${numbers} * ${ran} = ${result}`)
//
//    if(result % 2 == 0){
//        even.push(result);
//    }else{
//        odd.push(result);
//    }
//
//}
//
//console.log(even);
//console.log(odd);


//EIGHT EXERCISE

//const letters = ['T', 'P', 'Y', 'O', 'L', 'V', 'M', 'N', 'S', 'A', 'F', 'K', //'L', 'X', 'Z', 'B', 'R', 'H', 'J', 'D', 'U', 'G', 'I']
//
//const DNI = prompt('Introduzca su DNI');
//
//if(DNI.length == 8 && parseInt(DNI) > 0){
//    console.log(`Tu DNI completo es ${DNI}${letters[DNI % 23]}`)
//}


//NINETH EXERCISE

//let palabra = prompt('Introduzca su palabra').toLowerCase();
//
//consonantes = 0;
//vocales = 0;
//
//for(letras of palabra){
//    if(letras == 'a' || letras == 'e' || letras == 'i' || letras == 'o' || //letras == 'u')
//    vocales++
//    else{
//        consonantes++
//    }
//}
//
//console.log(`Tu palabra tiene ${vocales} vocales y ${consonantes} consonantes y //un total de ${palabra.length} letras`);


//TENTH EXERCISE

//const colors = ['azul', 'amarillo', 'rojo', 'verde', 'rosa']
//
//const color = prompt('Introduzca su color').toLowerCase();
//
//if(colors.indexOf(color) !== -1){
//    console.log('Tu color se encuentra dentro del array')
//}else{
//    console.log('Tu color no se encuentra dentro del array')
//}

