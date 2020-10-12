import {fromEvent, merge} from "rxjs";
import {pluck} from "rxjs/operators";

const keyup$ = fromEvent(document, 'keyup')
const click$ = fromEvent(document, 'click')

/**
 * merge: mezcla las salidas de varios observables.
 * Se completa cuando se completen todos los observables
 * que contiene
 */
merge(
    keyup$.pipe(
        pluck('type')
    ),
    click$.pipe(
        pluck('type')
    )
).subscribe(console.log);
