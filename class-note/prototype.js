// 자바스크립트 프로토타입
//예제
let user = {name: 'hyunha', age: 100};
let admin = {};

admin.__proto__ = user;
admin.name; // hyunha출력
admin.age; // 100출력
admin.role = 'admin';
admin; //{role: 'admin'} 출력

// 자바스크립트 프로토타입 활용 사례
let obj = {a: 10};
Object.keys(obj); //["a"]
obj.hasOwnProperty('a'); //true

// Built-in JavaScript or JavaScript Native API
