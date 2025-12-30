import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Offcanvas, Button, Row, Col} from 'react-bootstrap';
import './MainCanvas.css';


function MainCanvas() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <Container>
      {/* 메인텍스트 */}
      <Row>
        <Col className='mt-5 ms-5 text-color'>
          <br/><br/><br/><br/><br/>
          <div className='fw-bold fade-up'>   
            <p className='fs-2'>안녕하세요</p>
            <p className='fs-2'>
              <span className="highlight">경력 5년 웹디자인 지원자</span> <br/>
              <span className="highlight">최수진</span>입니다.
            </p>
          </div>
          <div className='mt-5 fade-up delay'>
            <p className='fw-mute fs-small mx-0'>
              작업물 기여도 100% 입니다.
            </p>
          </div>
        </Col>       
      {/* 오프캔버스 */}
        <Col className='text-center mt-5'>
          <div style={{ position: 'relative' }}>
        <Col Row className="justify-content-end" xs="auto">
        <br/>
          <Button className='btn-color floating-btn' onClick={handleShow}>
            포트폴리오
          </Button>
        </Col>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton >
              <Offcanvas.Title className='mt-5 fs-3 ps-3 fw-bold' ><br />목록</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className='fs-4 ps-3'>
                {/* <br />
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
                  <Link to='/sujin'  className='link-item' onClick={handleClose}>이력서</Link>
                  <span className="ribbon">HOT</span>
                </div> */}
              {/* <br /> */}
              <p><Link to='/detalie' className='link-item' onClick={handleClose}>상세페이지</Link></p>
              <p><Link to='/banner' className='link-item' onClick={handleClose}>이벤트 배너</Link></p>
              <p><Link to='/thum' className='link-item' onClick={handleClose}>유튜브 썸네일 및 그 외</Link></p>
              <hr></hr>
              <p><Link to='/made' className='link-item' onClick={handleClose}>포트폴리오 제작 과정</Link></p>
              </div>          
            </Offcanvas.Body>
          </Offcanvas>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default MainCanvas;