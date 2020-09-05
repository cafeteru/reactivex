import { Observable, Observer } from 'rxjs';

// Interfaz para definir que hace el subscriber
const observer: Observer<string> = {
    next: valor => console.log(`next: ${valor}`),
    error: error => console.error(`error: ${error}`),
    complete: () => console.info('Complete')
}

const observable$ = new Observable<string>(
    subscriber => {
        subscriber.next('Emite un mensaje');

        // Forzarmos un error
        const a = undefined;
        a.nombre = 'nombre';

        subscriber.complete(); // Termina la emisión
    }
);

observable$.subscribe(observer);