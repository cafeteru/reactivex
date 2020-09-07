import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

/**
 * Para añadir operators necesitamos la función pipe()
 * y se colocan esta dentro
 * 
 * map: modifica todos los valores del flujo de datos
 */
range(1, 5).pipe(
    map<number, string>(value => `Valor final: ${value * 10}`)
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map(event => event.key)
);
keyup$.subscribe((val) => console.log(val));
keyupCode$.subscribe((val) => console.log(`map: ${val}`));

/**
 * pluck: devuelve el valor de una propiedad de un objeto
 */
const keyUpPluck$ = keyup$.pipe(
    pluck('path', '0', 'localName')
);
keyUpPluck$.subscribe((val) => console.log(`pluck: ${val}`));

/**
 * mapTo: tranforma la entrada en una salida especifica
 */
const keyUpMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);
keyUpMapTo$.subscribe((val) => console.log(`mapTo: ${val}`));