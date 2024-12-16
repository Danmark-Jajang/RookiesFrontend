/**
 * 비동기, 콜백헬, Promise, async ~ await
 * 
 * JS의 실행 환경
 *  - 현재 nodejs 기반에서 JS를 가동중임
 *  - nodejs의 특징
 *      - 싱글 스레드 기반으로 작동
 *          - 스레드는 프로세스를 쪼갠 작업단위
 *          - 강력한 퍼포먼스 발휘
 *      - 넌블러킹 작동 성질을 가짐
 *          - 코드가 진행될 때, 결과를 기다리면서 대기하는 부분이 없다
 *          - 블럭하지 않고 코드는 계속 진행된다
 *              - 결과가 꼬일 수 있다
 *      - 참고
 *          - 동기식 코드
 *              - 파이썬 -> 느리다
 *          - 비동기식 코드
 *              - JS(nodejs기반) -> 빠르지만 싱크조절이 필요하다
 *              - 콜백함수로 해결
 * 
 *  - 비동기 상황 발생 요인
 *      - I/O 상황이 대부분
 *          - sw코드 <-> 외부리소스간에 통신
 *              - 외부리소스 : DB, Network, file, ...
 *  - JS에서는 콜백한수 형태로 이 상황을 해결했다
 */

//file I/O
// js <-> file : 연결해서 read/write후 닫기
// JS가 file을 엑세스 -> 외부라이브러리를 사용한다 -> 라이브러리 가져오기
// nodejs에서는 2가지 방법으로 라이브러리 import가능
// 1. CommnJS (CJS) -> 초기 nodejs부터 지원
//      nodejs기반으로 backend를 구성시 자주 사용
// 2. ES Module (ESM) -> ES Next에 의해 추가, react/vue에서 사용
//      frontend 구성시 자주 사용

// CJS 방식으로 file access libraary 가져오기
//fs -> file system
const fs = require('fs');
//console.log(fs)

// 비동기 상황 연출
// 1.txt, 2.txt(상당히 긴 내용으로 구성됨), 3.txt
class Test {
    //생성자
    constructor () {
        // 상대경로, 현재 파일을 기준으로 경로를 체크
        // this.FILE1 = './data/1.txt';
        // this.FILE2 = './data/2.txt';
        // this.FILE3 = './data/3.txt';

        // 절대 경로, root디렉토리부터 경로를 체크
        // __dirname : 현재 파일의 디렉터리 경로를 절대경로로 제공, nodejs제공
        this.FILE1 = __dirname + '/data/1.txt';
        this.FILE2 = __dirname + '/data/2.txt';
        this.FILE3 = __dirname + '/data/3.txt';
    }
    //기존 방식 -> 비동기 고려 X
    // 문제점1. 일관된 결과를 기대할 수 없다.(순서가 제각각이다)
    sample(){
        // 1.txt, 2.txt, 3.txt 순서대로 읽기 -> 동기식처리 전재
        // fs.readFile()는 파일을 읽어서 언젠가 완료되면 등록된 콜백한수에 전달
        fs.readFile(this.FILE1, (err, data)=>{
            console.log(this.FILE1, data);
        });
        fs.readFile(this.FILE2, (err, data)=>{
            console.log(this.FILE2, data);
        });
        fs.readFile(this.FILE3, (err, data)=>{
            console.log(this.FILE3, data);
        });
    }
    // 해결법1. 앞의 결과를 받을 때 그 뒤의 프로세스 진행 -> 자원을 다 사용하지 못해서 처리시간이 늘어남
    // 문제점 : Depth가 너무 깊어짐, 코드가 길어지면 깊이도 깊어짐, 콜백헬 발생
    // 콜백헬이 발생하면 유지보수가 힘들고 가독성이 떨어진다
    normal(){
        // 첫번째 파일 시도
        fs.readFile(this.FILE1, (err, data)=>{
            console.log(this.FILE1, data);
            //여기서 두번째 파일 시도
            fs.readFile(this.FILE2, (err, data)=>{
                console.log(this.FILE2, data);
                //여기서 마지막 파일 시도
                fs.readFile(this.FILE3, (err, data)=>{
                    console.log(this.FILE3, data);
                });
            });
        });
    }
    // 해결법2. Promise Pattern등장
    // 1. Promise object를 반환하는 함수 구성, 통상적으로 만들일이 없을 것임
    // 2. 해당 함수를 이동하여 비동기 처리..?
    /*
        함수()
            .then()
            .then()
            ...
            .catch()
            .finally()
        // nodejs, js의 라이브러리 검색 : npmjs.com
    */
    es6PromiseDefine(fileName) {
        // resolve   : 작업이 성공할 때 호출하는 callback함수
        // rejcet   : 작업이 실패할 때 호출하는 callback함수
        return new Promise( (resolve, reject)=>{
            //처리할 작업(파일 읽기, 비동기)
            fs.readFile(fileName, (err, data)=>{
                if(err) reject(err); //file read fail
                else resolve(data); //file read success
            });
        } );
    }
    es6PromiseUse(){
      this.es6PromiseDefine(this.FILE1)
        .then((data) => {
          console.log(`file 1 read success`, new String(data));
          // 2번 파일을 읽기
          return this.es6PromiseDefine(this.FILE2);
        })
        .then((data) => {
          console.log(`file 2 read success`, data);
          //3번 파일 읽기
          return this.es6PromiseDefine(this.FILE3);
        })
        .then((data) => {
          console.log(`file 3 read success`, new String(data));
        })
        .catch((err) => {
          console.log(`fail`, err);
        })
        .finally(() => {
          console.log(`finish`);
        });
    }

    readAllFiles(){
        this.es6PromiseDefine(this.FILE1)
            .then( data => {
                
            })
            .then(this.es6PromiseDefine(this.FILE3))
            .catch()
    }

    //해결 3번 
    // Promise pattern이 있는데 너무 와일드(길다), 간결하게 가능한가?
    // C#의 async ~ await 문법이 JS에 추가
    // 쓰는법 : 비동기 함수 앞에 await 추가하고
    //         await가 존재하는 코드를 감싼 블럭에 async추가(보통 함수))
    //          (이렇게 해도 본질은 Promise, 좀 더 쉽게 작성해줄 뿐)

    async esNextAsyncAwait(){
        console.log (await this.es6PromiseDefine(this.FILE1)); //비동기 행위를 하는 코드
        console.log (await this.es6PromiseDefine(this.FILE2));
        console.log (await this.es6PromiseDefine(this.FILE3));
    }


    // generator를 사용하는 방식(복잡, iterator, yeild등의 이해 필요)
}

const obj = new Test();
//obj.sample();
// 결과에 일관성이 없다 -> 데이터 크기에 따라 제각각, 제어가 어렵다

// obj.normal();
// obj.es6PromiseUse();
obj.esNextAsyncAwait();