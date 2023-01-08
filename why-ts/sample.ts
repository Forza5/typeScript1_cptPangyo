//반환해주는 값도 type으로 지정 가능
function add(a: number, b: number): number {
  return a + b;
}

//typeScript의 장점 2가지
//에러의 사전방지
// add(10, "20");

//코드의 자동완성
var result = add(10, 20);
result.toLocaleString();
