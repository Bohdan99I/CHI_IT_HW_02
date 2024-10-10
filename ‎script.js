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

// sendData, передаємо об'єкт з access-token
const sendData = addParamsToRequest({ "access-token": "qwerty" });

//sendData з різними даними
const result1 = sendData({ name: "John", age: 30 });
console.log(result1);

const result2 = sendData({ name: "Jane", age: 25 });
console.log(result2);

const result3 = sendData({ name: "Doe", age: 40 });
console.log(result3);

////////////////////////////////////////////////////////////////////
console.log("=== Завдання 2 ===");

const obj = {
  name: "John",
  age: 30,
  getData: function () {
    console.log(`Person name is: ${this.name} and age ${this.age}`);
  },
};

// Викликаємо метод getData, використовуючи об'єкт obj
obj.getData();

// Функція, яка завжди викликає getData з контекстом obj
const alwaysGetData = obj.getData.bind(obj);

// Приклад: викликаємо нову функцію декілька разів
alwaysGetData();
alwaysGetData();
