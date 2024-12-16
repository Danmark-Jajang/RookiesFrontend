/**
 * 게시판 형태로 UI를 구성
 *  - 제품 1개를 클릭하면 상세정보보기
 *      - 창띄우기 <- 서드파트 GUI 컴포넌트 설치하여 구성
 *      - 상세 페이지 이동 <- 라우팅 처리 필요(지금은 안함)
 *      - 현재 화면에서 상단부분에 표시
 *  - WorkFlow
 *      - 클릭 - 어떤 상품을 클릭하였는가 -> id값을 확인
 *      - id값을 사용하여 상세정보 획득(ajax통신)
 *      - 통신 결과를 파싱하여 JSX로 구성
 *      - product에 세팅 후 화면갱신
            - 필요시 구조변경
 */

import {
    useState,       // 상태변수 - 화면갱신
    useEffect,      // 중요한 생애주기함수 대체
    useMemo,        // 데이터 메모이제이션
    useCallback,    // 함수 메모이제이션
    useRef,         // 데이터가 바뀌어도 화면갱신 안되게해줌
    useContext,     // 여러 컴포넌트가 접근하여 사용하는 데이터 관리
} from 'react';
import './App.css';
import axios from 'axios';

// 통신 후 JSX를 생성하는 별도 함수
async function getAllProducts(url){
    console.log('전체 상품 데이터 획득(페이징 기능 x)')
    const res = await axios.get(url); //비동기 코드를 동기처럼 처리
    console.log('통신결과', res.data); //Object list로 들어옴
    return res.data.map((product, index)=>{
        const {id, title, price, description, category, image, rating} = product;
        //획득한 결과를 JSX로 구성 - 화면 표시까지
        return (
            <tr key={id} onClick={()=>{

            }} >
                <td><img src={image} width='40px'/></td>
                <td>{title}</td>
                <td>${price}</td>
                <td>{category}</td>
                <td>{description}</td>
            </tr>
        );
    });
}

// 대표모듈화 + 커스텀 컴포넌트 정의 (함수형)
export default function App({url, pid}){
    console.log(url, pid)

    const [productAll, setProductAll] = useState(null); //모든제품
    const marketUrl = useRef(url);
    const productID = useRef(parseInt(pid));
    const [product, setProduct] = useState(null); //단일제품

    useEffect(()=>{
        // 관찰대상이 없으므로 1회성으로 호출됨
        console.log('컴포넌트가 보일려고 한다');
        // 1회성 -> 최초에 ajax통신을 통해 상품 데이터를 획득
        getAllProducts(marketUrl.current) // 결과가 비동기로 도착함
            .then(res => {
                setProductAll(res)
            })
            .catch(err => {})
            .finally();
    }, []);

    return (
        <div className='App'>
            <div className='App-header'>
                <p><span style={{color:"skyblue"}}>상품정보</span></p>
                <div  style={{margin:'2em'}} >
                    <div>
                        {/* 상품 상세 정보 표시 */}
                        <fieldset>
                            {product}
                        </fieldset>
                        <br/>
                        <table border="1" >
                            <thead>
                                <tr>
                                    <td>사진</td>
                                    <td>상품명</td>
                                    <td>가격</td>
                                    <td>카테고리</td>
                                    <td>설명</td>
                                </tr>
                            </thead>
                            <tbody>
                                {productAll}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}