// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

// interface일 때는 interface Person만 보임
// type일 때는 type Person = {name: string; age: number;}까지 다 보임
// 윈도우 = alt / 맥 = cmd키 누르면 type or interface 참조 가능!!
let seho: Person = {
    name: '세호',
    age: 30
}

// type에 별칭 부여 가능
type MyString = string;
let str: MyString = 'hello';

// type별칭 예제
type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}

// type과 interface의 가장 큰 차이
// inteface는 확장이 가능하지만, type은 확장이 불가능!!
// 가능한 type보다는 interface로 선언해서 사용하는 것을 추천!!
// 좋은 소프트웨어는 언제나 확장이 용이해야 한다는 원칙 준수!!