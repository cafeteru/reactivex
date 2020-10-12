import {fromEvent, interval} from "rxjs";
import {exhaustMap, take} from "rxjs/operators";

let counter = 0;
const interval$ = interval(500).pipe(take(5));
const click$ = fromEvent(document, 'click');
click$.pipe(
    /**
     * exhaustMap: parecido al concatMap pero solo concatena
     * suscripciones si no tiene ninguna activa
     */
    exhaustMap(() => {
        counter++;
        return interval$;
    })
).subscribe((res: number) => {
    console.log(`${counter}: ${res + 1}`)
});
