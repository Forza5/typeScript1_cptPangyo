//제네릭 문법
// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자 10
// logText('hi'); // 문자열 hi
// logText(true); // 진위값 true

//타입을 넘겨줄 수 있음 = generic(제네릭) 현재는 문자(string)를 넘겨줌
// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
// //'인자의 type은 string이다'라고 정의
// logText<string>('hi');

// 함수를 여러개 중복해서(중복되는 코드들을 중복해서) 작성하는 것은 비효율적
// 코드의 가독성뿐만아니라 코드의 양도 비대해짐
// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }
// 현재 logText의 text파라미터의 type을 정하지 않았기 때문에
// 암묵적으로 string, number, boolean 등과 같은 type들을 사용할 수 있음

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// 유니온 타입을 이용한 선언
function logText(text: string | number) {
    console.log(text);
    // string과 number에 공통으로 접근할 수 있는 속성이나 API만 사용가능
    
    return text;
}

const a = logText('a'); // a는 string과 number 타입을 모두 가지고 있음
logText(10);
// const num = logNumber(10);
// logText(true);

