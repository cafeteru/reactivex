import {fromEvent, interval} from "rxjs";
import {switchMap} from "rxjs/operators";

let counter = 0;
const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    // mergeMap(() => {
    //     counter++;
    //     return interval$;
    // }) // mantiene todas las subcripciones
    switchMap(() => {
        counter++;
        return interval$;
    }) // mantiene solo la ultima subcripciones
).subscribe((res: number) => {
    console.log(`${counter}: ${res + 1}`)
});
