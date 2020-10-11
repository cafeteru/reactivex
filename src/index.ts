import {fromEvent, Observable, of} from "rxjs";
import {catchError, debounceTime, map, mergeAll, mergeMap, pluck} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {GithubUser} from "./interfaces/github-user";
import {GithubUserResp} from "./interfaces/github-user-resp";

const showUsers = (users: GithubUser[]) => {
    orderList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;
        const link = document.createElement('a');
        link.href = user.html_url;
        link.text = 'Ver perfil';
        link.target = '_blank';
        li.append(img);
        li.append(user.login + ' ');
        li.append(link);
        orderList.append(li);
    })
};

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');
const url = 'https://httpbin.org/delay/1?arg=';
input$.pipe(
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap(
        (text: string) => ajax.getJSON(url + text))
).subscribe(console.log)

/**
 * switchMap: Sirve para enlazar suscripciones entre si pero
 * solo devuelve los valores de la ultima.
 */
