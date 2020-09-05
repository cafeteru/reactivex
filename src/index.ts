import { Observer } from 'rxjs';

const observer: Observer<string> = {
    next: valor => console.log(`next: ${valor}`),
    error: error => console.error(`error: ${error}`),
    complete: () => console.info('Complete')
}
