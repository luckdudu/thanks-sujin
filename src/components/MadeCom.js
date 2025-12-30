import React from 'react'
import {Container, Badge} from 'react-bootstrap';
import './MadeCom.css';
import code0 from '../images/code0.png';
import code1 from '../images/code1.png';
import code2 from '../images/code2.png';
import code3 from '../images/code3.png';
import code4 from '../images/code4.png';
import TestPage from '../images/TestPage.gif';

const MadeCom = () => {
  return (
    <>
      <Container fluid className='text-center text-color back-bg'>
        {/* 1번째이미지 */}
        <div>
          <div className='first-style'>
            <br/><br/>
            Figma 설계, React로 완성한 ...<br/>
            <span className='fs-2 fw-bold'>포트폴리오 제작 과정</span>
          </div>
          <div>
            <img
              src={code0}
              alt={code0}
              className="img-fluid d-block-center mt-3 shadow-sm"
            />
          </div>
        </div>
        {/* 2번째이미지 */}
        <div>
          <div>
            <br/><br/>
              <h4>
                <Badge bg="secondary" className='mb-3'> 1 </Badge><br></br>
                <span className='fw-bold'>🎨 Figma를 활용한 디자인 설계</span><br></br>
              </h4>
              <h5 className='pt-3'>
                웹/앱 레이아웃 설계부터 디자인 시스템 구축,<br></br>
                페이지별 효과를 설정하며 제작 하였습니다.
              </h5>
          </div>
          <div>
            <img
              src={code1}
              alt={code1}
              className="img-fluid d-block-center mt-3 shadow-sm"
            />
          </div>
        </div>
        {/* 3번째이미지 */}
        <div>
          <div>
            <br/><br/>
              <h4>
                <Badge bg="secondary" className='mb-3'> 2 </Badge><br></br>
                <span className='fw-bold'>💻 VS Code 기반 React 컴포넌트 구조화</span><br></br>
              </h4>
              <h5 className='pt-3'>
                유지보수 용이성을 위해 Component와 Page 로 분리했습니다.<br></br>
                각 페이지를 Fragment 구조로 나눈 뒤<br></br>
                조합하여 최종 페이지를 완성했습니다.
              </h5>
          </div>
          <div>
            <img
              src={code3}
              alt={code3}
              className="img-fluid d-block-center mt-3 shadow-sm"
            />
          </div>
        </div>
        {/* 4번째이미지 */}
        <div>
          <div>
            <br/><br/>
              <h4>
                <Badge bg="secondary" className='mb-3'> 3 </Badge><br></br>
                <span className='fw-bold'>🧩 스타일링 및 반응형 디자인 구현</span><br></br>
              </h4>
              <h5 className='pt-3'>
                React Bootstrap으로 기본 구조를 빠르게 구성한 후,<br></br>
                라이브러리 한계를 극복하기 위해<br></br> 컴포넌트별 커스텀 CSS를 적용했습니다.<br></br>
                필요에 따라 '!important'를 활용하여 스타일을 제어했습니다.
              </h5>
          </div>
          <div>
            <img
              src={code2}
              alt={code2}
              className="img-fluid d-block-center mt-3 shadow-sm"
            />
          </div>
        </div>
        {/* 5번째이미지 */}
        <div>
          <div>
            <br/><br/>
              <h4>
                <Badge bg="secondary" className='mb-3'> 4 </Badge><br></br>
                <span className='fw-bold'>🚀 GitHub를 활용한 배포</span><br></br>
              </h4>
              <h5 className='pt-3'>
                GitHub에 새 프로젝트를 생성한 후,<br></br>
                VS Code에서 Git 프로젝트를 연결하고,<br></br>
                package.json 수정 및 빌드 과정을 거쳐 배포를 완료했습니다.
              </h5>
          </div>
          <div>
            <img
              src={code4}
              alt={code4}
              className="img-fluid d-block-center mt-3 shadow-sm"
            />
          </div>
        </div>
        {/* 6번째이미지 */}
        <div className='mb-5'>
          <div>
            <br/><br/>
              <h4>
                <Badge bg="secondary" className='mb-3'> 4 </Badge><br></br>
                <span className='fw-bold'>🎬 최종 구현 결과</span><br></br>
              </h4>
          </div>
          <div>
            <img
              src={TestPage}
              alt={TestPage}
              className="img-fluid d-block-center mt-3 shadow-sm mb-5"
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default MadeCom
