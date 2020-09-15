import { fromEvent } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click')

/**
 * takeWhile: recibe los valores mientras la condición
 * se cumpla.
 */
click$.pipe(
    tap(console.log),
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y < 250)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});