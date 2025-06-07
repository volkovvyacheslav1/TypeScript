// Задание 1

interface Car {
    model: string;
    price: number;
    dynamic_1: Record<string, string>;
    dynamic_2: { [key: string]: string };
    turple: [string, number, string]; // string, number, string
}


// Задание 2


function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;


function add(a: any, b: any): any {
  return a + b;
}


console.log(add(2, 3));        // 5
console.log(add('Hi, ', 'TS'));// 'Hi, TS'
console.log(add('Age: ', 25)); // 'Age: 25'
console.log(add(100, 'kg'));   // '100kg'


// Задание 3



interface Car {
  model: "bmw"; // литеральный тип
  dynamic_1: boolean;
  tuple: [number, number];
  optionalFeature?: string;
}

// 1. Pick
type PickDynamic1 = Pick<Car, "dynamic_1">;

// 2. Omit
type OmitTuple = Omit<Car, "tuple">;

// 3. Required
type AllRequired = Required<Car>;

// 4. Uppercase
type UpperModel = Uppercase<Car["model"]>; // "BMW"

// 5. Partial
type PartialCar = Partial<Car>;

// 6. Создание объектов
const car: Car = {
  model: "bmw",
  dynamic_1: true,
  tuple: [1, 2],
};

const dynamicOnly: PickDynamic1 = {
  dynamic_1: car.dynamic_1,
};

const withoutTuple: OmitTuple = {
  model: car.model,
  dynamic_1: car.dynamic_1,
  optionalFeature: "sunroof",
};

const partial: PartialCar = {
  model: "bmw",
};

const upperModel: UpperModel = "BMW";
