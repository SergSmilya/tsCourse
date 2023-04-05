// Задайте правильні ts типи для класичних js;

let age: number;
let nameS: string;
let toggle: boolean;
let empty: null; 
let notInitialize: undefined; 

let callback = (a: number) => { return 100 + a };

// Задайте тип для змінної, в яку можна зберегти будь-яке значення.

let anything: any = -20;
anything = 'Text';
anything = {};