import {of} from "rxjs";
import {endWith, startWith} from "rxjs/operators";

const numbers$ = of(1, 2, 3).pipe(
    /**
     * startWith: indica la primera emisión del observable.
     * Se puede enviar cualquier elemento
     */
    startWith('a', 'b', 'c'),
    /**
     * endWith: indica la ultima emisión del observable antes de
     * que este se complete.
     * Se puede enviar cualquier elemento
     */
    endWith('x', 'y', 'z')
);

numbers$.subscribe(console.log);
