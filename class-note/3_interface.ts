//interface = type과 마찬가지로 객체의 타입의 이름을 지정하는 방법
// 반드시 객체에서만 사용 가능
interface User {
    age: number;
    name: string;
}

// 변수에 interface 활용
let seho: User = {
    age: 33,
    name: '세호'
};

// 함수에 interface 활용
function getUser(user: User) {
    console.log(user);
}
const capt = {
    age: 100,
    name: '캡틴',
}
getUser(capt);

// 함수의 스펙(구조)에 interface 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0]; // 'a'

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp; //정규표현식
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
// obj['cssFile'] = 'a'
// regexp가 들어가야하는데 string이 들어가있어서 오류 발생

Object.keys(obj).forEach(function(value){

});

// interface 확장(상속) => 중복된 것 상속
interface Person {
    name: string;
    age: number;
}

// Person을 상속 => name과 age
interface Developer extends Person {
    language: string;
}

// 반드시 name, age, language값 필요!!
let captain: Developer = {
    language: 'react',
    age: 100,
    name: '이현하'
}