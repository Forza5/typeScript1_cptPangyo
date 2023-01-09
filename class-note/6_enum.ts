//enum = 별도의 값을 적지 않으면 전부다 숫자형 enum으로 취급
//숫자형 enum
//0부터 1씩 증가
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

let myShoes = Shoes.Nike;
console.log(myShoes); //숫자형 enum = 0출력 / 문자형 enum = '나이키' 출력

// enum 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer) {
    if(answer === Answer.Yes){
        console.log('정답입니다.');
    }
    if(answer === Answer.No){
        console.log('오답입니다.');
    }
}
//enum에서 제공하는 방식대로 작성
//enum에서 넘겨주는 값만 작성 가능
askQuestion(Answer.Yes);
askQuestion(Answer.No);

//enum에서 제공하지 않는 방식
askQuestion('Y');

//dropdown같은 곳에서 enum을 작성하는게 좋을 것!!