/**
 * 모듈 가져오기
 *  - mod를 가져와서 자신의 것 처럼 사용하기
 *  - import 대표모듈 from '상대경로+커스텀모듈명|서드파트모듈명';
 *  - import {모듈, 모듈,...} from '상대경로+커스텀모듈명|서드파트모듈명';
 *  - import 대표모듈, {모듈, 모듈,...} from '상대경로+커스텀모듈명|서드파트모듈명';
 *      - 대표모듈은 밖으로 나와있어야 한다
 * 
 *  - 특징
 *      - npm init을 사용하면 CJS방식이 defulat
 *      - ESM을 사용하려면 package.json에 내용이 있어야함
 *          - "type":"module"
 *      - 
 * 
 * npm init으
 */

// 1. 필요한 모듈 가져오기
//      대표 모듈명은 원본과 다르게 이름을 커스텀 가능하지만 보통 똑같이 가져온다
import Human2, { a, add, Person } from "./mod.js";

// 2. 모듈 사용
console.log(a);
console.log(add(1,2));
const p = new Person();
p.log()

const h = new Human2();
h.log();