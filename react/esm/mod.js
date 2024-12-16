/**
 * 모듈화하여 다른 js가 사용할 수 있게 구성
 *  - 1개의 js에서 모든 내용을 구현하는 것은 거의 불가능 -> 모듈화
 *  - 재사용성 증가, 여러 js에서 참조할 수 있도록 한다 -> 모듈화
 * 
 *  - 특징
 *      - 일반적인 코드는 private하다 -> 외부에서 사용 불가능하고 내부에서만 가능
 *      - ESM 모듈화 처리하면 export & import default를 사용해서 외부에서 사용가능
 */

// 1. 변수 모듈화
export const a = 'hi';

// 2. 함수 모듈화
export function add(x, y){return x+y;}

// 3. 객체 모듈화
export class Person{
    log() {
        console.log("Person's log() called");
    }
}

// 4. 대표 모듈화(default)
export default class Human{
    log() {
        console.log("Human's log() called");
    }
}
// or
// export default Human; <- 아래쪽에서 따로 명시해주어도 무관
