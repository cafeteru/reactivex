import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';

/**
 * takeUntil: crea un segundo observable a parte del que esta escuchando.
 * Recibe los valores devueltos por el primero hasta que el segundo devuelva el primer valor.
 * 
 * skip: omite el número de valor devueltor por el observable
 * indicados como parámetros
 */
const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';
document.querySelector('body').append(boton)

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('antes skip')),
    skip(2),
    tap(() => console.log('después skip'))
);
counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});