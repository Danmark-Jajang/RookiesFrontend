/**
 * 코드 수행시 오류코드가 발생할 수 있다 -> 예방/방지
 *  -?.
 *      - 욥셔널 체이닝  ex) 함수().then().catch(). ...
 *      - 앞에서 오류가 발생하면 중단된다
 *      - 함수()?.then()?.catch()   <- 안전하게 처리가능(프로그램이 중단되지 않음)
 *  - ??
 *      - Nullish Coalescing
 *      - null일 때를 대비한 방어코드 -> 선택적 값 선택 유도
 */

// 데이터 sample
const A = {
    proc:{
        msg:{
            code:10
        },
        check:null
    }
}

// code:10을 출력하려면?
console.log(A.proc.msg.code);

console.log(A?.proc?.check?.code); // Undefinded발생 -> 예외처리 가능, 방어코드


// 서비스 -> 환경변수 -> 선택적 값 부여 가능
// 서버 포트 지정 ( 커스텀 || 시스템 설정 포트)
// 서버 포트 지정 ( 커스텀 || 시스템 설정 포트)

console.log('a' || 'hello'); // 'a'가 참이므로 'a'로 세팅
console.log('' || 'hello'); // ''가 거짓이므로 뒤에있는 'hello'로 세팅
console.log(0 || 'hello'); // 0은 거짓이므로 뒤에있는 'hello'로 세팅
console.log('' || 0); //
//만약 0을 선택하고 싶어서 위 코드를 사용하고자 했다면?
console.log(0 ?? 'hello');