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

////////////////////////////////////////////////////////////////////
console.log("=== Завдання 3 ===");

function findFilesInFolder(folder) {
  let files = [];

  // Перевіряємо, чи є в папці діти
  if (folder.children && folder.children.length > 0) {
    folder.children.forEach((child) => {
      if (child.type === "file") {
        // Якщо це file, додаємо його ім'я до масиву
        files.push(child.name);
      } else if (child.type === "folder") {
        // Якщо folder, рекурсивно викликаємо функцію для її вмісту
        files = files.concat(findFilesInFolder(child));
      }
    });
  }

  return files;
}

// Приклад:
const root = {
  name: "name",
  type: "folder",
  children: [
    {
      name: "folder 1",
      type: "folder",
      children: [
        {
          name: "folder 2",
          type: "folder",
          children: [
            {
              name: "file 3",
              type: "file",
              size: 30,
            },
          ],
        },
      ],
    },
    {
      name: "file 1",
      type: "file",
      size: 10,
    },
    {
      name: "file 2",
      type: "file",
      size: 20,
    },
  ],
};

// Виклик функції для об'єкта root
const files = findFilesInFolder(root);
console.log(files);

////////////////////////////////////////////////////////////////////
console.log("=== Завдання 4:ES6 ===");

class Human {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  introduce() {
    console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}.`);
  }
}

class Student extends Human {
  constructor(name, phone, course) {
    super(name, phone);
    this.course = course;
  }

  study() {
    console.log(`Я навчаюся на ${this.course} курсі.`);
  }
}

class Teacher extends Human {
  constructor(name, phone, subject) {
    super(name, phone);
    this.subject = subject;
  }

  teach() {
    console.log(`Я викладаю ${this.subject}.`);
  }
}

// Студент
const student = new Student("Іван", "123-456", 3);
student.introduce();
student.study();

// Викладач
const teacher = new Teacher("Марія", "789-012", "Математика");
teacher.introduce();
teacher.teach();

////////////////////////////////////////////////////////////////////
console.log("=== Завдання 4:ES5 ===");

function HumanES5(name, phone) {
  this.name = name;
  this.phone = phone;
}

HumanES5.prototype.introduce = function () {
  console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}.`);
};

function StudentES5(name, phone, course) {
  HumanES5.call(this, name, phone);
  this.course = course;
}

StudentES5.prototype = Object.create(HumanES5.prototype);
StudentES5.prototype.constructor = StudentES5;

StudentES5.prototype.study = function () {
  console.log(`Я навчаюся на ${this.course} курсі.`);
};

function TeacherES5(name, phone, subject) {
  HumanES5.call(this, name, phone);
  this.subject = subject;
}

TeacherES5.prototype = Object.create(HumanES5.prototype);
TeacherES5.prototype.constructor = TeacherES5;

TeacherES5.prototype.teach = function () {
  console.log(`Я викладаю ${this.subject}.`);
};

// Студент
const studentES5 = new StudentES5("Іван", "123-456", 3);
student.introduce();
student.study();

// Викладач
const teacherES5 = new TeacherES5("Марія", "789-012", "Математика");
teacher.introduce();
teacher.teach();
