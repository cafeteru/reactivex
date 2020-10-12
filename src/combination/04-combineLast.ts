import {combineLatest, fromEvent} from "rxjs";
import {map} from "rxjs/operators";

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
const click$ = fromEvent<MouseEvent>(document, 'click')

/**
 * combineLastest: contiene varios observables.
 * Combina las salidas de estos pero para hacer esto
 * necesita que por lo menos cada observable emita un valor.
 * No termina hasta que todos los observables terminen.
 * Si cuando el ultimo observable emite un valor pero el
 * otro no, coge el ultimo que emitio este
 */
combineLatest(
    keyup$.pipe(
        map((keyboardEvent: KeyboardEvent) =>
            keyboardEvent.key
        )
    ),
    click$.pipe(
        map((mouseEvent: MouseEvent) => {
            return [mouseEvent.x, mouseEvent.y];
        })
    )
).subscribe(console.log);
