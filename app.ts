// // Задайте правильні ts типи для класичних js;
// let age: number;
// let nameS: string;
// let toggle: boolean;
// let empty: null; 
// let notInitialize: undefined; 

// let callback = (a: number) => { return 100 + a };

// // Задайте тип для змінної, в яку можна зберегти будь-яке значення.
// let anything: any = -20;
// anything = 'Text';
// anything = {};

// // Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
// let some:unknown;
// some = 'Text';

// let str: string;

// if(typeof some==="string") str = some;

// // Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
// let person: [string, number]
// person = ['Max', 21];
 
// // Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
// enum Load { LOADING, READY };

// // Зробіть змінну, яка може приймати або рядок, або число.
// let b: string | number;

// // Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
// let i: 'enable' | 'disable';

// // Вкажіть типи для наступних функцій
// function showMessage(message:string):void {
//   console.log(message);
// }


// function calc(num1:number, num2:number):number {
//   return num1 + num2;
// }

// function customError():never {
//   throw new Error('Error');
// }

// showMessage('string');
// console.log(calc(7, 8));
// // customError();

// // Створіть свій тип даних на основі наявних даних.
// type DataBase = {
//     title: string,
//   likes: number,
//   accounts: string[],
//   status: 'open'|'close',
//   details?: {
//     createAt: Date,
//     updateAt: Date,
//   }
// }

// const DataBase1 = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: '2021-01-01',
//     updateAt: '2021-05-01',
//   }
// }

// const DataBase = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }

