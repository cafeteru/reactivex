import {fromEvent, interval, Observable, of} from "rxjs";
import {map, mergeMap, take, takeUntil} from "rxjs/operators";

/**
 * mergeMap: junta las salidas de varios observables para poder
 * realizar una unica suscripción
 */
const letter$ = of('a', 'b', 'c');
letter$.pipe(
    mergeMap<string, Observable<string>>((letter: string) => interval(1000).pipe(
        map((i: number) => letter + i),
        take(3)
    ))
).subscribe(
    {
        next: value => console.log('next:', value),
        complete: () => console.log('complete:')
    }
);

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log);
