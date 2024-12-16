/**
 * - 게시판 형태로 UI를 구성
 *  - 메모이제이션 사용 -> 최적화!!, 메모리 절약(상대적)
 *  - 자주 사용되는 데이터 나 함수를 캐싱하여서 화면갱신시 매번 생성 x, 바로 사용
 *      - 데이터는 바로 엑세스 (통신, 전처리등 과정 x)
 *      - 함수 -> 매번 생성 x, 바로 호출
 * 
 *  - cb : showProductDetails / 콜백함수
 */

// 1. 모듈 가져오기
import {
    useState,       // 상태변수->화면갱신
    useEffect,      // 중요한 생애 주기 함수 대체(부분)
    useMemo,        // 데이터     
    useCallback,    // 함수, 함수호출는 매번 작동, 함수의 정의 1회, 이후는 캐싱
    useRef,         // 데이터, 변경되어도 랜더링 되지 않는다, 참조
    useContext,     // 여러 컴포넌트가 접근하여 사용하는 데이터 관리    
} from "react";
import axios from 'axios';

// 1. mui 관련 디자인이 적용된 컴포넌트 가져오기
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// mui관련 다이어로그 팝업
import {
  Dialog,           // 팝업
  DialogTitle,      // 팝업 제목
  DialogActions,    // 팝업 버튼 액션
  DialogContent,    // 팝업 내용

  Card,             // 특정 장면을 위한 컨테이너
  CardActions,      // 카드 이벤트
  CardContent,      // 카드 내용
  CardMedia,        // 카드내에 멀티미디어 처리(사진, 영상, 음악,...)

  Typography,       // 텍스트 처리
  Button            // 버튼
} from "@mui/material";


// 통신후 JSX 생성하는 별도 함수
async function getAllProducts( url, cb ) {
    const res = await axios.get( url );
    return res.data.map( ( product, idx )=>{
        const { id, title, description, price, image, category } = product;
        // 데이터 동적세팅 부분 교체
        return (
          <>
            {/* <tr
              key={id}
              onClick={() => {
                cb(id);
              }}
            >
              <th>
                <img src={image} width="100px"></img>
              </th>
              <th>{title}</th>
              <th>{price}</th>
              <th>{category}</th>
              <th>{description}</th>
            </tr> */}
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={()=>{
                cb(id);
              }}
            >
              {/* <TableCell component="th" scope="row">
                <img src={image} width="20px"></img>
              </TableCell> */}
              <TableCell align="right">{title}</TableCell>
              <TableCell align="right">{price}</TableCell>
              <TableCell align="right">{category}</TableCell>
              <TableCell align="right">{description}</TableCell>
            </TableRow>
          </>
        );
    } );
}

// 2. 대표 모듈화 + 커스텀 컴포넌트 정의 ( 객체형 | (*)함수형 )
export default function App ( {url, pid} ) {
    const marketUrl = useRef( url );
    const productID = useRef( parseInt(pid) );
    const [ productAll, setProductAll ] = useState(null); // 모든 제품 JSX
    const [ product, setProduct] = useState(null); // 1개 상품에 대한 상세정보JSX
    
    // 해당 함수는 캐싱이 되서, 화면 갱신시 아래코드는 작동되지 x
    // 반복작업 생략 => 화면갱신이 빨라짐 (버벅거림이 상대적으로 줄어듬)
    const showProductDetail = useCallback( async ( id ) => {
        console.log( '상세보기 요청', id);
        // 1. id값 기준 특정 상품 데이터 획득
        const res = await axios.get( `${ marketUrl.current }/${ id }` );
        // 2. 데이터:{}를 파싱 -> 동적으로 상세정보 JSX 구성
        const { title, description, price, image, category } = res.data; // 파싱
        // JSX 생성
        const pdtDetail = (
            <div >
                <img src={image} style={{ width:100, height:100 }}/>
                <p>{title}</p>
                <p>{price}</p>
                <p>{category}</p>
                <p>{description}</p>
            </div>
        );
        // 3. setProduct( 동적구성된 JSX ) 
        setProduct( pdtDetail );
        // 4. 화면갱신 발생!! => 확인

        // 팝업 트리거 달기
        dOpenHandler();
    }, [] );

    useEffect( ()=>{
        console.log('컴포넌트가 보일려고 한다 : 최초 1회 실행');        
    }, []);

    // 메모이제이션-데이터파트 1회성 코드
    // 전체 상품 데이터의 JSX를 저장/관리
    // 변수로 받아서 처리 or (*)상태변수에 저장하고 사용
    // useEffect()보다 먼저 작동
    useMemo( ()=>{        
        console.log('메모이제이션 최초 세팅-데이터');
        getAllProducts( marketUrl.current, showProductDetail )       
        .then( data=>{
            setProductAll( data );
        } )
        .catch()
        .finally();
    }, []);// 1회성 세팅, useEffect() 먼저 작동, 캐싱처리, 화면갱신시 직접 사용
    //}, [marketUrl.current]); // 변하지 않는 모니터링 대상 배치

    // mui 상태변수, 이벤트함수, 기타필요기능 정의
    const [open, setOpen] = useState(false); //팝업이 떠있던가 닫혀있던가 둘중 하나
    const dCloseHandler = ()=>{
        // 팝업 닫기
        setOpen(false);
        // 1개 상품정보 초기화
        setProduct(null);
    };
    const dOpenHandler = ()=>{
        // 팝업 띄우기
        setOpen(true);
    };

    return (
      <div className="App">
        <div className="App-header">
          <p>
            <span style={{ color: "red" }}>상품</span> 목록
          </p>
          <div style={{ margin: "2em" }}>
            <div>
              {/* 상품 상세 정보 표시, fieldset:사각 테두리 박스 생성 */}
              {/* 기존 제품 상세정보 표기 제거 */}
              {/* <fieldset>{product}</fieldset> */}
            </div>
            <br/>
            {/* mui관련 JSX내 테이블 교체 */}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                    {/* 기존 tr-th 표현 */}
                  <TableRow>
                    <TableCell align="right">상품명</TableCell>
                    <TableCell align="right">가격</TableCell>
                    <TableCell align="left">카테고리</TableCell>
                    <TableCell align="left">설명</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {productAll}
                </TableBody>
              </Table>
            </TableContainer>

            {/* mui 팝업 */}
            {/* onClose : 팝업이 아닌 빈 공간 클릭시 처리할 함수*/}
            <Dialog open={open} onClose={dCloseHandler} aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" >  
                <DialogTitle id="alert-dialog-title" > 제품 상세 정보 </DialogTitle>
                <DialogContent>
                    {/* product 내용은 card 컴포넌트로 재구성할 예정 */}
                    {product}
                </DialogContent>
                <DialogActions>
                    <Button onClick={dCloseHandler} autoFocus > 닫기 </Button>
                </DialogActions>
            </Dialog>

          </div>
        </div>
      </div>
    );
}   