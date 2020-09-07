import { asyncScheduler } from 'rxjs';

const saludar = () => console.log('Hola mundo');


// Permite usar setTimeout y setInterval mediante subscripciones
asyncScheduler.schedule(saludar, 2000);
const subscription = asyncScheduler.schedule(function (state) {
    console.log(state);
    this.schedule(state + 1, 1000);
}, 1000, 0);

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);