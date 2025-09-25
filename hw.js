//Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of


const user = {
  name: 'John',
  age: 25,
  hobby: 'reading',
  premium: true
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
for (let key of keys) {
  console.log(`${key}: ${user[key]}`);
}








//Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.


function countProps(obj) {
  const keys = Object.keys(obj);
  return keys.length;
}
const user1 = {
  name: 'John',
  age: 25,
  hobby: 'skydiving'
};
console.log(countProps(user1));




//Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".


function findBestEmployee(employees) {
  const keys = Object.keys(employees);
  let bestEmployee = '';
  let maxTasks = 0;
  for (let key of keys) {
    if (employees[key] > maxTasks) {
      maxTasks = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
}
const employees = {
  Vika: 25,
  David: 55,
  Never: 12,
  Nazzy: 99
};
console.log(findBestEmployee(employees));




//Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".


function countTotalSalary(employees) {
  const values = Object.values(employees);
  let total = 0;
  for (let value of values) {
    total += value;
  }
  return total;
}
const salaries = {
  Vika: 550,
  David: 999,
  Nazzy: 369
};
console.log(countTotalSalary(salaries));



//Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.


function getAllPropValues(arr, prop) {
  const result = [];
  for (let obj of arr) {
    if (obj.hasOwnProperty(prop)) {
      result.push(obj[prop]);
    }
  }
  return result;
}
const products = [
  { name: 'Moris', price: 1300},
  { name: 'Xenia', price: 2700},
  { name: 'Heldvald', price: 400},
  { name: 'Ayza', price: 1200}
];
console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'price'));







// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.



function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (let product of allProducts) {
    if (product.name === productName) {
      total = product.price * product.quantity;
      break;
    }
  }

  return total;
}
const products1 = [
  { name: 'Moris', price: 1300, quantity: 4 },
  { name: 'Xenia', price: 2700, quantity: 3 },
  { name: 'Heldvald', price: 400, quantity: 7 },
  { name: 'Ayza', price: 1200, quantity: 9 }
];
console.log(calculateTotalPrice(products1, 'Moris'));
console.log(calculateTotalPrice(products1, 'Xenia'));
console.log(calculateTotalPrice(products1, 'Heldvald'));
console.log(calculateTotalPrice(products1, 'Ayza'));
