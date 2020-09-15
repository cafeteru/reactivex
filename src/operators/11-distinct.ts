import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';

/**
 * Distinct: funciona como BBDD, solo devuelve los valores que
 * son distintos entre sí. Si un dato ya se envío, lo omite
 */
const numeros$ = of(1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 1, 1, 1, 1);
numeros$.pipe(
    distinct()
).subscribe(console.log);

interface Person {
    nombre: string
}

const persons: Person[] = [
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
    { nombre: 'Megaman' },
    { nombre: 'ZeroX' },
    { nombre: 'Zero' },
];

from(persons).pipe(
    distinct(person => person.nombre)
).subscribe(console.log);