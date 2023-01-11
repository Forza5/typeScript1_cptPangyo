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
// function logText(text: string | number) {
//     console.log(text);
//     // string과 number에 공통으로 접근할 수 있는 속성이나 API만 사용가능
    
//     return text;
// }

// const a = logText('a'); // a는 string과 number 타입을 모두 가지고 있음
// logText(10);
// const num = logNumber(10);
// logText(true);

// 제네릭을 이용한 type선언
function logText<T>(text: T):T {
    console.log(text);
    return text;
}

// 이처럼 type에 대한 이점을 제네릭이 확실히 가져감
const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

// logText('a');
// logText(10);

// interface에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = {value: 'abc', selected: false};

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<string> = {value: 'abc', selected: false};

// 제네릭의 타입 제한
//반환값은 굳이 작성하지 않아도 됨
//하지만 작성해주는 것이 가독성에 있어서 좋음
// T는 배열이기때문에 length가 제공이 될거라고 볼 수 있음
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     //text는 배열이기때문에 forEach 반복문 돌릴 수 있음
//     text.forEach(function(text) {
//         console.log(text);
//     });
//     return text;
// }
// logTextLength(['hi', 'abc']);

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength('a'); // 문자열은 length 속성이 적용 가능하기 때문에 문제 없음
logTextLength({length: 10}); // 객체 문제 없이 사용 가능

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
//ShoppingItem에 있는 key들 중 하나가 제네릭이 된다!!!
//주의) keyof는 interface에 있는 key만 들어갈 수 있게 타입 제약!!
// 위 ShoppingItem의 key= name, number, stock이 모두 string이자 key이기 때문에 "name", "price", "stock"값만 들어갈 수 있다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption('a');
getShoppingItemOption("name");