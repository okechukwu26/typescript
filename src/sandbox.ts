import { Invoice } from './classes/Invoice.js';
import { ListItem } from './classes/ListItem.js';
import { Payment } from './classes/payment.js';
import { isPerson } from './interface/interface.js';

const form = document.querySelector('.form-group') as HTMLFormElement;
const select = document.querySelector('#type') as HTMLSelectElement;
const input = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#detail') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
//listitem instance

const ul = document.querySelector('ul')!;
const list = new ListItem(ul);
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: isPerson;

  if (select.value === 'invoice') {
    doc = new Invoice(input.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(input.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, select.value, 'end');
});

// let object: { client: any; detail: any; amount: any };

// console.log(object);
// object = {
//   client: 23,
//   detail: 33,
//   amount: 'hello',
// };
// console.log(object);

// let greet: Function;

// greet = () => {
//   return 'hello';
// };
// console.log(greet());
// const bull = (a: number, b: number) => {
//   console.log(a + b);
// };
// bull(2, 4);
// type StringOrNum = string | number;
// type user = { name: string; age: number; uid: StringOrNum };
// const logDetail = (user: user) => {
//   console.log(`${user.name} says hello`);
// };

// const user = {
//   name: 'sam',
//   age: 32,
//   uid: 'hello',
// };

// logDetail(user);
