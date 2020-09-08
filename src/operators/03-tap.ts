import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

/**
 * Tap: muestra la información que llega del observable.
 * Se suele usar para depurar
 */
const numeros$ = range(1, 5);
numeros$.pipe(
    tap(x => console.log('tap', x)),
    map(value => value * 10),
    tap({
        next: valor => console.log('Despues', valor),
        complete: () => console.log('Fin')
    })
).subscribe(val => console.log('subscribe', val))