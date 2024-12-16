/**
 * 전역 상태관리를 위한 저장소, 확장자 js
 *  - zustand모듈 사용
 *  - 사용법
 *      - create 함수사용 -> 저장소(store)생성
 *          저장소 생성시 상태변수와 액션 정의
 */

import {create} from 'zustand';

// 1. 저장소 생성 (create)
//  set: 콜백 함수(내부적으로 정의)
const useStore = create((set)=>({
    count: 0,
    // 액션함수 (+1, -1을 하는 액션만)
    // 화살표함수에서 반환값이 객체{} 이고 수행문이 하나면, 소괄호로 묶어서 표현해야한다
    increment: ()=>{return set( (statement)=>({count: statement.count+1}) )},
    decrement: ()=>{return set( (statement)=>({count: statement.count-1}) )}

})); // 객체를 반환하므로 소괄호로 한번 더 감쌈

export default useStore;