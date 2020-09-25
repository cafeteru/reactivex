import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, pluck} from "rxjs/operators";

/**
 * debounceTime: emite datos cada x milisegundos.
 * Si durante ese periodo se emite 2 o más valores,
 * solo se devuelve el ultimo.
 */
console.warn('debounceTime');
const click$ = fromEvent(document, 'click');
click$.pipe(
    debounceTime(3000)
).subscribe(console.log)

const input = document.createElement('input');
document.querySelector('body').append(input);
const input$ = fromEvent(input, 'keyup');
input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);
