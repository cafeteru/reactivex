import { fromEvent } from 'rxjs';
import { first, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click')

/**
 * first: solo coge el primer valor que devuelve el observable
 * Se puede añadir un predicado que deberá cumplir los elementos
 * del observable para seleccionarlos 
 */
click$.pipe(
    tap<MouseEvent>(console.log),
    first((event) => event.clientX >= 150)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});