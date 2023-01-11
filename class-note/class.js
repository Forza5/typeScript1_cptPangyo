function Person(name, age) {
    this.name = name;
    this.age = age;
}

let capt = new Person('캡틴', 100)

// 클래스(class) 문법 ES2015 (ES6)
class Person {
    //클래스 로직
    constructor(name, age) {
        console.log('생성되었습니다.');
        this.name = name;
        this.age = age;
    }
}

let seho = new Person('세호', 30); // 생성되었습니다. 출력
console.log(seho);

// 위 function과 class는 같음