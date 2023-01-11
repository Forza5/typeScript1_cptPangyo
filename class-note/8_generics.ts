//제네릭 문법
// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자 10
// logText('hi'); // 문자열 hi
// logText(true); // 진위값 true

//타입을 넘겨줄 수 있음 = generic(제네릭) 현재는 문자(string)를 넘겨줌
function logText<T>(text: T):T {
    console.log(text);
    return text;
}
//'인자의 type은 string이다'라고 정의
logText<string>('hi');