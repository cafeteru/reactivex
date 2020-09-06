import { of } from 'rxjs';

// Devuelve los elementos de forma sincrona
const obs$ = of<number>(0, 1, 2, 3, 4, 5, 6);

console.log('Inicio');
obs$.subscribe(
    next => console.log(`next ${next}`),
    () => { },
    () => console.log('Terminamos la secuencia')
);
console.log('Fin');


const obs2$ = of<any>([1, 2], { a: 1, b: 2 }, function () { }, Promise.resolve(true));

console.log('Inicio 2');
obs2$.subscribe(
    next => console.log(`next ${next}`),
    () => { },
    () => console.log('Terminamos la secuencia 2')
);
console.log('Fin 2');