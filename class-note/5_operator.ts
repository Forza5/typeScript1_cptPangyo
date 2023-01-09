// function logMessage(value: string) {
//     console.log(value);
// }
// logMessage('hello');

// | = union type(유니온 타입) = 하나의 타입 이상을 쓸 수 있게 만들어줌

function logMessage(value: string | number){
    // 타입 가드 => 특정 타입으로 타입의 범위를 좁혀나가는(필터링하는) 과정
    if(typeof value === 'number') {
        //value. 이 if문 안에서 value는 자연스럽게 number가 됨
        value.toLocaleString();
    } 
    if(typeof value === 'string'){
        //이 if문 안에서 value는 자연스럽게 string이 됨
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

//Union Type 특징 => 공통된 속성만 접근 가능!!
//기본적으로 Developer와 Person의 type을 모두 제공할 것 같지만 
//실질적으로 name값만 할당됨
// function askSomeone(someone: Developer | Person) {
//     someone.name;
// }
// askSomeone({name: '디벨로퍼', skill: '웹 개발'});
// askSomeone({name: '캡틴', age: 100});

let seho: string | number | boolean;
//Union Type과는 달리
// 아래 예제처럼
// string도 만족하고, number도 만족하고 boolean도 만족하는 하나의 타입
// === 인터섹션 타입
let capt: string & number & boolean;

//Developer가 가지고 있는 name과 skill / Person이 가지고 있는 name과 age를 모두 포함
function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.skill;
    someone.age;
}
askSomeone({name: '디벨로퍼', skill: '웹 개발', age: 100});