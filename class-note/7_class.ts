class Person {
    // typeScript에서 class함수는 위에 type을 지정해주어야 함
    // class안에서만 사용하고 싶으면 private사용
    // 그렇지않으면 public을 사용
    // 추가로 readonly도 있지만, 이 readonly속성은 말그대로 접근만 가능, 값 변경 불가
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}