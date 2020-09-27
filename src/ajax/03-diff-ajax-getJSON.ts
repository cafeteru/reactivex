import {ajax, AjaxError} from "rxjs/ajax";
import {of} from "rxjs";
import {catchError} from "rxjs/operators";

const url = 'https://httpbin.org/delady/1';

const manejaError = (err: AjaxError) => {
    console.warn('error:', err.message)
    return of([]);
}

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'token': 'token'
}).pipe(catchError(manejaError));
const obs2$ = ajax(url).pipe(catchError(manejaError));

obs$.subscribe(data => console.log('getJSON', data));
obs2$.subscribe(data => console.log('ajax', data));
