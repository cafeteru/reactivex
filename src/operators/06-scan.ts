import { from, range } from 'rxjs';
import { map, scan } from 'rxjs/operators';

const totalReducer = (total: number, value: number) => total + value;

/**
 * scan: es igual que el reduce lo unico va emitiendo los
* cambios realizados con cada elemento del flujo
*/
range(1, 5).pipe(
    scan(totalReducer)
).subscribe(console.log);

// Redux, un ejemplo de que se trata
interface User {
    id?: number;
    authenticated?: boolean;
    token?: string;
    age?: number;
};

const users: User[] = [
    { id: 1, authenticated: false, token: null },
    { id: 2, authenticated: true, token: 'ABC' },
    { id: 3, authenticated: true, token: 'ABC12345' }
];

const state$ = from(users).pipe(
    scan<User>((acumulator, actual) => {
        return { ...acumulator, ...actual };
    }, { age: 33 })
);

state$.pipe(
    map(state => state.id)
).subscribe(res => console.log('res', res));