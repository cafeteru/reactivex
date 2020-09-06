import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next: valor => console.log(`next: ${valor}`),
    error: error => console.error(`error: ${error}`),
    complete: () => console.info('complete')
}

const interval$ = new Observable<number>(subscriber => {
    let count = 0;
    // Se ejecuta cada x milisegundos
    const interval = setInterval(() => subscriber.next(++count), 1000);

    setTimeout(() => {
        subscriber.complete();
        console.log('completado');
    }, 2500);

    // Se llama en unsubscribe()
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido')
    };
});

const subscription1 = interval$.subscribe(num => console.log(`Num: ${num}`));
const subscription2 = interval$.subscribe(num => console.log(`Num: ${num}`));
const subscription3 = interval$.subscribe(num => console.log(`Num: ${num}`));
subscription1.add(subscription2).add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe();
    console.log('Completado timeout');
}, 6000);