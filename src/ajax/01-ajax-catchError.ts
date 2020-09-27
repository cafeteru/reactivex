import {ajax, AjaxError} from "rxjs/ajax";
import {catchError, pluck} from "rxjs/operators";
import {of} from "rxjs";

const url = 'https://api.github.com/userss?per_page=5';
const manejaErrores = (res: Response) => {
    if (res.ok) {
        return res;
    }
    throw new Error(res.statusText);
}

fetch(url)
    .then(manejaErrores)
    .then(res => res.json())
    .then(data => console.log('fetch', data))
    .catch(err => console.warn('Error en usuarios', err));

/**
 * ajax: Realiza peticiones ajax (http)
 *
 * catchError: atrapa la excepción de un observable
 */
console.warn('ajax')

const atrapaError = (err: AjaxError) => {
    console.warn('Error en:', err.message);
    return of([]);
}

ajax(url).pipe(
    pluck('response'),
    catchError(atrapaError)
).subscribe(users => console.log('ajax', users));
