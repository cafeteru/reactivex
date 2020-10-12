import {concat, interval} from "rxjs";
import {take} from "rxjs/operators";

const interval$ = interval(1000);

/**
 * concat: recibe observables y junta sus salidas.
 * Solo ejecuta un observable después de que se complete
 * el observable anterior
 */
concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    [10, 20, 30, 40]
).subscribe(console.log);

