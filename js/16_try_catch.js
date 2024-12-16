/**
 * 예외처리
 *  - sw는 기본적으로 중단되지 않는다는 것이 전제
 *  - 오류가 발생하면?
 *      - 오류를 잡는다(catch)
 *          - try ~ catch ~ (finally)
 *      - 오류를 던진다(throw)
 *          - throw 오류객체
 */

function makeError () {
    console.log(1/0, -1/0); // 놀랍게 JS에서 Infinity, -Infinity라는 것으로 처리됨
    // 오류를 임의로 던지기
    throw new Error(`임의로 발생한 오류`);
}
try{
    console.log(1); //정상 코드
    makeError(); //문제 코드
    console.log(2);//정상코드
} catch(error){
    console.log(`error`, error); //에러 처리 코드
} finally { // 정상/오류 상관없이 무조건 진입(뒷정리 코드)
    //에러가 나도 진입한다 -> 프로그램이 죽지 않는다
    console.log(3);
}

// I/O와 관련된 코드는 반드시 예외처리 준비해둘것