//함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }
// sum(10, 20);

//함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}
//파라미터를 제한하는 특성 (2개까지 가능한데 넌 4개를 했어)
sum(10, 20, 30, 40);

//함수의 선택적(옵셔널) 파라미터 = ?사용
function log(a: string, b?: string) {}

log("hello world");
log("hello ts", "abc");
