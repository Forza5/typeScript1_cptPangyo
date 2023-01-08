// function sum(a, b) {
//   return a + b;
// }
// // sum(10, "20"); //1020
// //자동완성 안됨
// var result = sum(10, 20);
// result.toLocaleString();

// @ts-check

//자바스크립트를 타입스크립트처럼 코딩하는 방법
/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */

function sum(a, b) {
  return a + b;
}
//자바스크립트에서는 타입스크립트와는 다르게 에러를 알려주지 않음
//@ts-check를 사용하면 알려줌!!
sum(10, "20");
