import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

const totalReducer = (total: number, value: number) => {
    return total + value;
}

/**
 * Reduce: coge todos los elementos y realiza un cambio o calculo con ellos
 * Take: indica cuantos elementos del observer seleccionamos
 */
interval(1000).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
).subscribe({
    next: val => console.log('Resultado', val),
    complete: () => console.log('Fin')
});