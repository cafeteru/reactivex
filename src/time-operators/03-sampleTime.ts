import {fromEvent} from "rxjs";
import {map, sampleTime} from "rxjs/operators";

/**
 * sampleTime: Emite el ultimo valor recibido dentro
 * de un intervalo de tiempo
 */
console.warn('sampleTime');
const click$ = fromEvent<MouseEvent>(document, 'click')
click$.pipe(
    sampleTime(2000),
    map(({x, y}) => ({x, y}))
).subscribe(console.log);
