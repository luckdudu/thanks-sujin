import React, { useState } from 'react';
import './DetalieTop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Modal } from 'react-bootstrap';

function importAll(r) {
  return r.keys().map(r);
}


// 이미지 폴더 전체 불러오기 (src/images/detailPage)
const mainImages = importAll(require.context(`../images/detailPage`, false, /\.(png|jpe?g|gif|svg)$/));
const defuserAll = importAll(require.context(`../images/detailPage/defuser`, false, /\.(png|jpe?g|gif|svg)$/));

const images = [...mainImages, ...defuserAll];

const DetalieTop = () => {
  // 모달 상태 관리: 열림/닫힘
  const [show, setShow] = useState(false);
  // 모달에 보여줄 이미지 URL 저장
  const [selectedImage, setSelectedImage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (imgSrc) => {
    setSelectedImage(imgSrc); // 클릭된 이미지 URL 저장
    setShow(true);            // 모달 열기
  };

  return (
    <Container className='mt-5'>
      <div className='text-color'>
        <div>
          <p>
            <span className='fs-4 fw-mute'>레이아웃부터 디자인까지</span><br />
            <span className='fs-1 fw-bold'>상세페이지 제작</span>
          </p>
        </div>
      {/* 카드 */}  
      <Card className='shadow border-0 rounded-2'>
      <div className="masonry-grid mx-3 my-3">
        {images.map((img, i) => (
            <div key={i} className="masonry-item">
                <div 
                  className="border-0 rounded-1 overflow-hidden"
                  onClick={() => handleShow(img)} // 👈 클릭 이벤트 추가
                  style={{ cursor: 'pointer' }} // 클릭 가능함을 시각적으로 보여줌
                >
                    <img
                        src={img}
                        alt={`상세페이지 ${i + 1}`}
                        className="img-fluid d-block"
                        loading="lazy"
                    />
                </div>
            </div>
        ))}
      </div>
      </Card>
      </div>
      {/* 2. Modal 컴포넌트 추가 */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        {/* Modal의 Body에 확대된 이미지를 넣습니다. */}
        <Modal.Body className="p-0">
          <img 
            src={selectedImage} 
            alt="확대 이미지" 
            className="img-fluid" 
            // 이미지 클릭 시 모달 닫기 기능 추가
            onClick={handleClose} 
            style={{ cursor: 'pointer' }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default DetalieTop;
