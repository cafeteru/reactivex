import {fromEvent, Observable, of} from "rxjs";
import {catchError, debounceTime, map, mergeAll, pluck} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {GithubUser} from "../interfaces/github-user";
import {GithubUserResp} from "../interfaces/github-user-resp";

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
input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUserResp>>((text: string) => {
        const url = `https://api.github.com/search/users?q=${text}`;
        return ajax.getJSON(url);
    }),
    /**
     * mergeAll: sirve para trabajar con observables que devuelven otros
     * observables. Espera a que todos ellos terminen de emitir todos
     * sus valores
     */
    mergeAll<GithubUserResp>(),
    map<GithubUserResp, GithubUser[]>(res => res.items),
    catchError((error) => {
        console.error(`Error de la api de Github: ${error.message}`);
        return of([]);
    })
).subscribe((users: GithubUser[]) => showUsers(users));
