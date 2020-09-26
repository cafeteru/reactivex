import {fromEvent, interval} from "rxjs";
import {sample} from "rxjs/operators";

/**
 * sample: funciona como el sampleTime cambia el intervalo de tiempo
 * por un segundo observable, cuando este emite un dato, el primer
 * observable emite su ultimo dato.
 *
 * Si el segundo observable emite un dato pero el primero no,
 * no se emiten datos.
 * Se termina cuando el primer observable realiza 'OnComplete'
 */
console.warn('sample');
const interval$ = interval(50);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);
