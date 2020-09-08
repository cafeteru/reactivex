import { from, fromEvent, Observable, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/**
 * Filter: filtra un listado indicando la condición que deben cumplir los elementos
 */
range(10, 20).pipe(
    filter((value, index) => {
        console.log(`index: ${index}`);
        return value % 2 === 1
    })
).subscribe(console.log);

interface Person {
    tipo: string,
    nombre: string
}
const persons: Person[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];

/**
 * From: convierte una lista en un observable
 */
const observable$: Observable<Person> = from(persons);
observable$.pipe(
    filter(person => {
        return person.tipo === 'heroe';
    })
).subscribe(console.log);

/**
 * Concatenación de operadores:
 * - Se aplican en orden descendente
 * - Cada operator, coge la salida del anterior
 */
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').
    pipe(
        map(event => event.code),
        filter(code => code.toLowerCase().includes('key'))
    );
keyup$.subscribe(console.log);