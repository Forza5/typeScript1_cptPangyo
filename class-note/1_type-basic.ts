//문자열
// JS 문자열 선언방식
// var str = "hello";

// TS 문자열 선언방식
let str: string = "hello";

// TS 숫자 선언방식
let num: number = 10;

// TS 배열(number) 선언방식
let arr: Array<number> = [1, 2, 3];

// TS 배열(string) 선언방식
let heroes: Array<string> = ["Capt", "Thor", "Hulk"];

// TS 배열 간편하게 선언방식
let items: number[] = [1, 2, 3];

// TS 튜플 = 특정 순서의 타입까지 정해주는 것
let address: [string, number] = ["gangnam", 100];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: "capt",
//   age: 100,
// };
let person: { name: string; age: number } = {
  name: "capt",
  age: 100,
};

// TS 진위값 (boolean)
let show: boolean = true;
