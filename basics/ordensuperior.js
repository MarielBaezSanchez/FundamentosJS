//funciones de Orden Superior
// High Order Functions
/*
Funciones que reciben funciones como parametros
*/

const myFunction = () => {
    console.log('Igor, ejecuta la función');
}
myFunction();
const sameFunction = myFunction;
sameFunction();

const otherSameFunction = myFunction;
otherSameFunction();

const funOne = () => {
    console.log('Ejecuta la función One, esclavo');
}
const funTwo = (username) => {
    console.log('Ejecuta la función One, subdito');
    console.log('Hola '+username);
}

const funThree = (otherFunction) => {
    console.log('Inicia la función 3, porfis');
    otherFunction();
    console.log('Termina función 3')
}

funOne();
funTwo('Carlos');
funTwo('Bob Esponja');
funThree(funOne);
funThree(() => console.log('Soy una Arrow Function'));