import {asyncScheduler, fromEvent} from "rxjs";
import {distinctUntilChanged, pluck, throttleTime} from "rxjs/operators";

/**
 * throttleTime: es parecido al debounceTime,
 * ignora los valores emitido dentro del
 * periodo de tiempo enviado indicado. Cada vez que lee un elemento
 * empieza la cuenta
 */
console.warn('throttleTime');
const click$ = fromEvent(document, 'click');
click$.pipe(
    throttleTime(3000)
).subscribe(console.log)

const input = document.createElement('input');
document.querySelector('body').append(input);
const input$ = fromEvent(input, 'keyup');
input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true, // primer elemento
        trailing: true // ultimo elemento
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);
