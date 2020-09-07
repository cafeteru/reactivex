import { asyncScheduler, range } from 'rxjs';

/**
 * Devuelve un listado de número dentro de un rango
 */
const src$ = range(1, 5, asyncScheduler);

console.info('inicio');
src$.subscribe(console.log);
console.info('inicio');