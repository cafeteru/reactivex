import {fromEvent} from "rxjs";
import {auditTime, map, tap} from "rxjs/operators";

/**
 * auditTime: emite el ultimo dato dentro de un intervalo de tiempo.
 * La diferncia es que comienza a contar el tiempo cuando se recibe
 * el primer dato
 */
console.warn('auditTime');
const click$ = fromEvent<MouseEvent>(document, 'click');
click$.pipe(
    map(({x, y}) => ({x, y})),
    tap(val => console.log('tap', val)),
    auditTime(2000)
).subscribe((val: { x, y }) => console.log('auditTime', val));
