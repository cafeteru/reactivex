import { fromEvent } from 'rxjs';

/**
 * Observable para obtener eventos del DOM
 */
const clickEvent$ = fromEvent<MouseEvent>(document, 'click');
const keyUpEvent$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: (val: Event) => console.log('next ', val)
}

clickEvent$.subscribe(observer);
keyUpEvent$.subscribe(event => console.log(event.key));