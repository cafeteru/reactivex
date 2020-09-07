import { interval, timer } from 'rxjs';

const observer = {
    next: (val: number) => console.log(`next: ${val}`),
    complete: () => console.log('complete')
};

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

// Se ejecuta cada x milisegundos
const interval$ = interval(1000);

// Se ejecuta en una fecha determinada
const timer$ = timer(hoyEn5);

console.log('inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');