import { Link } from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';
import './MenuNav.css';

const MenuNav = () => {
  return (
    <>
    {/* <Navbar expand="lg" bg="light" data-bs-theme="light" className='pt-4' sticky="top">
        <Container>
           <Link 
                to="/" 
                className='link-item btn btn-color' // btn 및 btn-color 클래스 추가
                style={{ textDecoration: 'none', padding: '0.375rem 0.75rem', borderRadius: '0.375rem' }} // Bootstrap 버튼 스타일 유지
            >
              홈
            </Link>
        <Nav className="me-auto ">
        <Nav.Link as={Link} to="/sujin" className='fe-bold Thover'>이력서</Nav.Link>
        <Nav.Link as={Link} to="/detalie" className='Mhover'>상세페이지</Nav.Link>
        <Nav.Link as={Link} to="/banner" className='Mhover'>이벤트 배너</Nav.Link>
        <Nav.Link as={Link} to="/thum" className='Mhover'>유튜브 썸네일 및 그 외</Nav.Link>
        <Nav.Link as={Link} to="/made" className='Mhover'>제작과정</Nav.Link>
        </Nav>
        </Container>
    </Navbar> */}
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">홈</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/detalie" className='Mhover'>상세페이지</Nav.Link>
            <Nav.Link as={Link} to="/banner" className='Mhover'>이벤트 배너</Nav.Link>
            <Nav.Link as={Link} to="/thum" className='Mhover'>유튜브 썸네일 및 그 외</Nav.Link>
            <Nav.Link as={Link} to="/made" className='Mhover'>제작과정</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MenuNav
