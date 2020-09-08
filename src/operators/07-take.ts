import { range } from 'rxjs';
import { take, tap } from 'rxjs/operators';

/**
 * Take: selecciona el número de datos que le indicamos 
 * y detiene el observable
 */
range(1, 80).pipe(
    tap(console.log),
    take(4)
).subscribe({
    next: val => console.log(`next: ${val}`),
    complete: () => console.log('Completado')
})