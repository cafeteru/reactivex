import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<string> = {
    next: valor => console.log(`next: ${valor}`),
    error: error => console.error(`error: ${error}`),
    complete: () => console.info('complete')
};

const observable$ = new Observable<string>(subs => {
    const intervalID = setInterval(
        () => subs.next(Math.random().toString()), 1000
    );
    return () => clearInterval(intervalID);
});

/**
 * Sirve para guardar la referiencia a un observable.
 * Es decir, se devuelve el mismo observable en todas las subscripciones.
 * 
 * Propiedades del Subject:
 * 1. Casteo múltiple
 * 2. También es un observer
 * 3. Next, error, y complete
 */
const subject$ = new Subject<string>();
const subcription = observable$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(rnd => console.log(`subs2 :  ${rnd}`));

setTimeout(() => {
    subject$.next('10');
    subject$.complete();
    subcription.unsubscribe();
}, 3500);