const {
  add,
  sub,
  mult,
  div,
  percentage,
  pow,
  log,
  factorial,
} = require("./calculator");

describe("Функции калькулятора", () => {
  test("1.1 Сложение положительных чисел", () => {
    expect(add(5, 3)).toBe(8);
  });

  test("1.2 Сложение отрицательных чисел", () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test("1.3 Сложение дробных чисел", () => {
    expect(add(2.5, 3.5)).toBe(6);
  });

  test("1.4 Вывод ошибки 'Введенные данные не соответствуют типу Number', при вводе не Number", () => {
    expect(() => add("asdasd", 2)).toThrow(
      "Введенные данные не соответствуют типу Number"
    );
  });

  test("2.1 Вычитание положительных чисел", () => {
    expect(sub(5, 3)).toBe(2);
  });

  test("2.2 Вычитание отрицательных чисел", () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  test("2.3 Вычитание из нуля", () => {
    expect(sub(0, 3)).toBe(-3);
  });

  test("2.4 Вычитание дробных чисел", () => {
    expect(sub(5.5, 2.2)).toBeCloseTo(3.3);
  });

  test("2.5 Вывод ошибки 'Введенные данные не соответствуют типу Number', при вводе не Number", () => {
    expect(() => sub("asdasd", 2)).toThrow(
      "Введенные данные не соответствуют типу Number"
    );
  });

  test("3.1 Умножение положительных чисел", () => {
    expect(mult(5, 3)).toBe(15);
  });

  test("3.2 Умножение отрицательных чисел", () => {
    expect(mult(-5, -3)).toBe(15);
  });

  test("3.3 Умножение на ноль", () => {
    expect(mult(5, 0)).toBe(0);
  });

  test("3.4 Умножение дробных чисел", () => {
    expect(mult(1.5, 2.5)).toBeCloseTo(3.75);
  });

  test("3.5 Вывод ошибки 'Введенные данные не соответствуют типу Number', при вводе не Number", () => {
    expect(() => mult("asdasd", 2)).toThrow(
      "Введенные данные не соответствуют типу Number"
    );
  });

  test("4.1 Деление положительных чисел", () => {
    expect(div(6, 3)).toBe(2);
  });

  test("4.2 Деление отрицательных чисел", () => {
    expect(div(-6, -3)).toBe(2);
  });

  test("4.3 Деление на 0. Вывод ошибки 'Нельзя делить на ноль'", () => {
    expect(() => div(5, 0)).toThrow("Нельзя делить на ноль");
  });

  test("4.4 Деление дробных чисел", () => {
    expect(div(4.4, 2.25)).toBeCloseTo(1.955555555);
  });

  test("4.5 Деление 0 на число", () => {
    expect(div(0, 5)).toBe(0);
  });

  test("4.6 Вывод ошибки 'Введенные данные не соответствуют типу Number', при вводе не Number", () => {
    expect(() => div("asdasd", 2)).toThrow(
      "Введенные данные не соответствуют типу Number"
    );
  });

  test("5.1 Процент от положительного числа", () => {
    expect(percentage(200, 10)).toBe(20);
  });

  test("5.2 Процент от отрицательного числа", () => {
    expect(percentage(-200, 10)).toBe(-20);
  });

  test("5.3 Процент = 0", () => {
    expect(percentage(200, 0)).toBe(0);
  });

  test("5.4 Процент = 100", () => {
    expect(percentage(200, 100)).toBe(200);
  });

  test("5.5 Дробный процент", () => {
    expect(percentage(50, 2.5)).toBeCloseTo(1.25);
  });

  test("5.6 Вывод ошибки 'Введенные данные не соответствуют типу Number', при вводе не Number", () => {
    expect(() => percentage("asdasd", 2)).toThrow(
      "Введенные данные не соответствуют типу Number"
    );
  });

  test("6.1 Положительное число в положительную степень", () => {
    expect(pow(2, 3)).toBe(8);
  });

  test("6.2 Положительное число в отрицательную степень", () => {
    expect(pow(2, -2)).toBeCloseTo(0.25);
  });

  test("6.3 Число в 0 степень", () => {
    expect(pow(5, 0)).toBe(1);
  });

  test("6.4 0 в положительную степень", () => {
    expect(pow(0, 3)).toBe(0);
  });

  test("6.5 Отрицательное число в положительную степень", () => {
    expect(pow(-2, 3)).toBe(-8);
  });

  test("6.6 Вывод ошибки 'Введенные данные не соответствуют типу Number', при вводе не Number", () => {
    expect(() => pow("asdasd", 2)).toThrow(
      "Введенные данные не соответствуют типу Number"
    );
  });

  test("7.1 Логарифм положительного числа с основанием 10", () => {
    expect(log(100, 10)).toBeCloseTo(2);
  });

  test("7.2 Логарифм положительног очисла с основанием 2", () => {
    expect(log(8, 2)).toBeCloseTo(3);
  });

  test("7.3 Логарифм 1", () => {
    expect(log(1)).toBe(0);
  });

  test("7.4 Логарифм отрицательного числа. Вывод ошибки 'Аргумент должен быть > 0'", () => {
    expect(() => log(-10, 10)).toThrow("Аргумент должен быть > 0");
  });

  test("7.5 Логарифм с основанием <=0. Вывод ошибки 'Основание должно быть > 0 и не равно 1'", () => {
    expect(() => log(10, 0)).toThrow("Основание должно быть > 0 и не равно 1");
  });

  test("7.6 Логарифм с основанием 1. Вывод ошибки 'Основание должно быть > 0 и не равно 1'", () => {
    expect(() => log(10, 1)).toThrow("Основание должно быть > 0 и не равно 1");
  });

  test("7.7 Вывод ошибки 'Введенные данные не соответствуют типу Number', при вводе не Number", () => {
    expect(() => log("asdasd", 2)).toThrow(
      "Введенные данные не соответствуют типу Number"
    );
  });

  test("8.1 Факториал положительного числа", () => {
    expect(factorial(5)).toBe(120);
  });

  test("8.2 Факториал 0", () => {
    expect(factorial(0)).toBe(1);
  });

  test("8.3 Факториал отрицательного числа. Вывод ошибки 'Факториал не определен для отрицательных чисел'", () => {
    expect(() => factorial(-5)).toThrow(
      "Факториал не определен для отрицательных чисел"
    );
  });

  test("8.4 Вывод ошибки 'Введенные данные не соответствуют типу Number', при вводе не Number", () => {
    expect(() => factorial("asdasd")).toThrow(
      "Введенные данные не соответствуют типу Number"
    );
  });
});
