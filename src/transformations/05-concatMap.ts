import {fromEvent, interval} from "rxjs";
import {concatMap, take} from "rxjs/operators";

let counter = 0;
const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');
click$.pipe(
    /**
     * concatMap: Sirve para enlazar suscripciones entre si.
     * Los va uniendo en forma de cola, cuando termina una, continua
     * con la siguiente
     */
    concatMap(() => {
        counter++;
        return interval$;
    })
).subscribe((res: number) => {
    console.log(`${counter}: ${res + 1}`)
});
