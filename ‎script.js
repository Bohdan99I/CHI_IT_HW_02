////////////////////////////////////////////////////////////////////
console.log("=== Завдання 1 ===");

function addParamsToRequest(params) {
  let count = 0;

  return function (data) {
    count++;

    // Повертаємо новий об'єкт, який містить params, data та count
    return {
      ...params,
      data: data,
      count: count,
    };
  };
}

// Використання функції
console.log("=== Завдання: Функції вищого порядку та замикання ===");

// Створюємо функцію sendData, передаючи об'єкт з access-token
const sendData = addParamsToRequest({ "access-token": "qwerty" });

// Виклик функції sendData з різними даними
const result1 = sendData({ name: "John", age: 30 });
console.log(result1); // { 'access-token': 'qwerty', data: { name: 'John', age: 30 }, count: 1 }

const result2 = sendData({ name: "Jane", age: 25 });
console.log(result2); // { 'access-token': 'qwerty', data: { name: 'Jane', age: 25 }, count: 2 }

const result3 = sendData({ name: "Doe", age: 40 });
console.log(result3); // { 'access-token': 'qwerty', data: { name: 'Doe', age: 40 }, count: 3 }
