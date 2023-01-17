// 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

let getExpon = (userNum, numExp) => {
  let result = userNum;
  for (let i = 2; i <= numExp; i++) {
    result *= userNum;
  }
  return result;
};
console.log(
  `(2^3)+(3^3)=${getExpon(2, 3)}+${getExpon(3, 3)}=${
    getExpon(2, 3) + getExpon(3, 3)
  }`
);

// 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
let userSalary = Number(prompt("введите размер заработной платы"));
let getSalaryTax = () => {
  if (userSalary === userSalary) {
    console.log(
      `размер заработной платы за вычетом налогов составляет: ${
        userSalary * 0.87
      }`
    );
  } else {
    console.log("кажется вы написали что то,не связанное с числом");
  }
};
getSalaryTax();

// 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
let numA = Number(prompt("введите первое число для сравнения"));
let numB = Number(prompt("введите второе число для сравнения"));
let numC = Number(prompt("введите третье число для сравнения"));
let getMaxValue = (numA, numB, numC) => {
  let maxVal = numA;
  maxVal < numB ? (maxVal = numB) : maxVal;
  maxVal < numC ? (maxVal = numC) : maxVal;
  return maxVal;
};
console.log(
  `среди чисел ${numA}, ${numB} и ${numC} максимальным является: ${getMaxValue(
    numA,
    numB,
    numC
  )}`
);

// 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
// сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо
// вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
// не нужно.
let userNumA = Number(prompt("введите первое число для демонстрации функции"));
let userNumB = Number(prompt("введите второе число для демонстрации функции"));

let getSum = (userNumA, userNumB) => {
  return userNumA + userNumB;
};
let getDiff = (userNumA, userNumB) => {
  if (userNumA !== userNumB) {
    return userNumA > userNumB ? userNumA - userNumB : userNumB - userNumA;
  } else {
    return 0;
  }
};
let getMult = (userNumA, userNumB) => {
  return userNumA * userNumB;
};
let getDiv = (userNumA, userNumB) => {
  return userNumA / userNumB;
};
console.log(
  `у нас есть числа: ${userNumA} и ${userNumB}
сумма чисел равна ${getSum(userNumA, userNumB)}
разность чисел равна ${getDiff(userNumA, userNumB)}
nумножение чисел равно ${getMult(userNumA, userNumB)}
деление чисел равно ${getDiv(userNumA, userNumB)}`
);
