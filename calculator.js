function add(x, y) {
  if (typeof x != "number" || typeof y != "number") {
    throw new Error("Введенные данные не соответствуют типу Number");
  }
  return x + y;
}

function sub(x, y) {
  if (typeof x != "number" || typeof y != "number") {
    throw new Error("Введенные данные не соответствуют типу Number");
  }
  return x - y;
}

function mult(x, y) {
  if (typeof x != "number" || typeof y != "number") {
    throw new Error("Введенные данные не соответствуют типу Number");
  }
  return x * y;
}

function div(x, y) {
  if (typeof x != "number" || typeof y != "number") {
    throw new Error("Введенные данные не соответствуют типу Number");
  }
  if (y === 0) {
    throw new Error("Нельзя делить на ноль");
  }
  return x / y;
}

function percentage(x, percent) {
  if (typeof x != "number" || typeof percent != "number") {
    throw new Error("Введенные данные не соответствуют типу Number");
  }
  return (x * percent) / 100;
}

function pow(x, y) {
  if (typeof x != "number" || typeof y != "number") {
    throw new Error("Введенные данные не соответствуют типу Number");
  }
  return Math.pow(x, y);
}

function log(x, base = 10) {
  if (typeof x != "number" || typeof base != "number") {
    throw new Error("Введенные данные не соответствуют типу Number");
  }
  if (x <= 0) {
    throw new Error("Аргумент должен быть > 0");
  } else if (base <= 0 || base === 1) {
    throw new Error("Основание должно быть > 0 и не равно 1");
  }
  return Math.log(x) / Math.log(base);
}

function factorial(x) {
  if (typeof x != "number") {
    throw new Error("Введенные данные не соответствуют типу Number");
  }
  if (x < 0) {
    throw new Error("Факториал не определен для отрицательных чисел");
  }
  if (x === 0) return 1;
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i;
  }
  return result;
}

module.exports = {
  add,
  sub,
  mult,
  div,
  percentage,
  pow,
  log,
  factorial,
};
