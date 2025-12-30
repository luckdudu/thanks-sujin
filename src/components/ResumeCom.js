import React from 'react'
import { Container, Card, ListGroup, Accordion, Row, Col, Alert, Badge } from 'react-bootstrap'
import './ResumeCom.css';
import me from '../images/me.jpg';

const ResumeCom = () => {
  return (
    <>
    <Container className='text-color mt-5'>
    <Row>
        {/* 왼쪽 */}
    <Col xs={12} md={3} className='mb-3'>
    <Card  className='fade-up'>
        <Card.Img 
            variant="top" 
            src={me} 
            className="rounded-circle mx-auto d-block mt-3 shadow-sm"
            style={{ width: '150px', height: '180px', objectFit: 'cover' }}
        />
        <Card.Body>
        <Card.Title>최수진 <spna className ='fw-mute fs-6'>CHOI SU-JIN</spna></Card.Title>
        <Card.Text>
            <span className='highlight'>WEB, UI/UX Designer</span><br/>
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            {/* 자격증 */}
            <Card.Header className='fw-bold'>자격증</Card.Header>
            <ListGroup.Item>컴퓨터그래픽스운용기능사</ListGroup.Item>
            <ListGroup.Item>GTQ</ListGroup.Item>
            {/* 운용가능프로그램 */}
            <Card.Header className='fw-bold'>운용 가능 프로그램</Card.Header>
            <ListGroup.Item>
                <spna className='fw-mute fs-6 text-secondary'>
                    GRAPHICS 그래픽 <br/>
                </spna>
                <spna>
                    Adobe Photoshop / Illustration <br/>Premier pro
                </spna>
            </ListGroup.Item>
            <ListGroup.Item>
                <spna className='fw-mute fs-6 text-secondary'>
                    CODING 코딩<br/>
                </spna>
                <span>
                React.js / JavaScript / Bootstrap <br/> HTML5 / CSS3 / JavaScript
                </span>
            </ListGroup.Item>
            <ListGroup.Item>
                <spna className='fw-mute fs-6 text-secondary'>
                    COOPERATION 협업<br/>
                </spna>
                <span>
                Figma / Notion / Git / GitHub
                </span>
            </ListGroup.Item>
        </ListGroup>
    </Card>
    </Col>
        {/* 상세 */}
    <Col className='fade-up delay'>
        {/* 한줄소개 */}
     <Alert variant="light">
      <Alert.Heading>세 줄 소개</Alert.Heading>
      <p className='ms-3'>
         ✔ 웹디자인 실무 경험과 개발 역량을 함께 갖춘 디자이너 최수진입니다.
        <hr />
         ✔ 디자인 감각에 기술적 사고를 더해, 사용자 중심의 웹을 구현하는 것이 저의 목표입니다.
        <hr />
         ✔ 변화에 주저하지 않고, 배움을 행동으로 옮기는 디자이너로 성장하고 있습니다.
      </p>
     </Alert>
     {/* 여기부터자기소개서 */}
    <Alert variant="light">
        <Alert.Heading>자기소개서</Alert.Heading>

        <Accordion alwaysOpen >
            {/* 상세 경력기술서 */}
            <Accordion.Item eventKey="0">
                <Accordion.Header>상세 경력기술서</Accordion.Header>
                <Accordion.Body>
                    <div>
                        <span className='fw-bold'>디자인 & 영상 편집<br/></span>
                        [Photoshop / Illustrator / Premiere Pro]<br/>
                        - Photoshop을 활용한 상세페이지, 이벤트 배너 등 웹 프로모션용 디자인 제작<br/>
                        - 이미지 합성, 배경 제거, 색감·조명 보정 및 다양한 효과 적용 가능<br/>
                        - Illustrator를 이용한 리플렛, 포장 라벨, 인쇄물 디자인 및 발주 실무 수행<br/>
                        - 브랜드 아이덴티티에 맞춘 벡터 그래픽 제작 및 편집 가이드라인 관리<br/>
                        - Photoshop·Illustrator 병행으로 웹·인쇄·브랜딩 디자인 통합 작업 가능<br/>
                        - Premiere Pro를 활용한 숏츠 및 프로모션 영상 제작 (컷 편집, 자막, 속도 조절 등)<br/>
                        - 영상과 그래픽을 결합한 웹·SNS용 비주얼 콘텐츠 기획 및 제작 경험<br/><br/>
                    </div>
                    <div>
                    <span className='fw-bold'>웹 개발 및 UI/UX<br/></span>
                    [React.js / JavaScript / Bootstrap]<br/>
                    - React.js 기반 SPA(단일 페이지 앱) 구현 및 컴포넌트 구조 설계<br/>
                    - React Router를 통한 페이지 이동 및 파라미터 관리<br/>
                    - Redux Toolkit을 활용한 전역 상태관리 및 비동기 로직 구현<br/>
                    - Axios로 Spring Boot API와 통신 및 데이터 시각화<br/>
                    - React-Bootstrap을 이용한 반응형 UI 구성<br/>
                    - PC/모바일 대응형 UI 개발 및 카드/폼/모달 등 컴포넌트 구현<br/>
                    - GitHub를 통한 프로젝트 버전 관리 및 팀 협업 수행<br/><br/>
                    [HTML5 / CSS3 / JavaScript]<br/>
                    - HTML5 시맨틱 마크업 기반 웹 접근성 고려 및 구조화된 코드 작성<br/>
                    - CSS3(Flexbox, Grid) 기반 레이아웃 설계 및 반응형 스타일 구성<br/>
                    - Figma를 활용한 UI/UX 와이어프레임 제작 및 인터랙션 설계<br/>
                    - 디자인 시안  HTML/CSS 반영  기능 연동까지 전체 구현 경험<br/>
                    - 컴포넌트 단위 UI 설계 및 디자인 시스템 구성(Figma 스타일 토큰 활용)<br/>
                    - Spring + Thymeleaf 환경에서 서버 데이터와 템플릿 연동 구현<br/>
                    </div>
                    <div className='mt-3'>
                    <span className='fw-bold'>협업 및 프로젝트 관리<br/></span>
                    [Git / GitHub / Notion / Figma]<br/>
                    - Git / GitHub을 통한 버전 관리, 브랜치 전략(Git Flow), Pull Request 리뷰 수행<br/>
                    - 팀 프로젝트 협업 경험: 코드 충돌 해결 및 협업형 워크플로우 운영<br/>
                    - Notion을 활용한 일정·역할·회의록·문서 관리 및 프로젝트 진행 시각화<br/>
                    - Figma로 디자인 시안 작성 및 구현팀과의 협업 프로세스 정립<br/>
                    - 개발-디자인 간 실시간 피드백을 통해 완성도 높은 결과물 도출<br/>
                </div>
            </Accordion.Body>
            </Accordion.Item>
            {/* 경력사항 */}
            {/* <Accordion.Item eventKey="1">
                <Accordion.Header>
                    경력 사항
                    <Badge bg="secondary" className='ms-1'>총 6년 4개월</Badge>
                </Accordion.Header>
                <Accordion.Body>
                <div>
                    <dl>
                        <dt>올프레쉬농업회사법인㈜<spna className='ms-2 text-secondary'>2023.07 ~ 2025.04 1년 10개월</spna></dt>
                        <dd className='ms-3 mt-2'>
                            - 상세페이지 및 팝업배너 제작 <br/>
                            - 자사몰 관리(카페24 이용) <br/>
                            - 숏츠 제작, 기타 인쇄물 발주 및 디자인
                        </dd>
                        <hr></hr>
                        <dt>피앤더블유인터네셔널㈜<spna className='ms-2 text-secondary'>2022.10 ~ 2023.06 8개월</spna></dt>
                        <hr></hr>
                        <dt>메디쉬㈜<spna className='ms-2 text-secondary'>2021.09 ~ 2022.09 1년 1개월</spna></dt>
                        <hr></hr>
                        <dt>희스토리㈜<spna className='ms-2 text-secondary'>2018.12 ~ 2019.05 6개월(계약만료)</spna></dt>
                        <hr></hr>
                        <dt>메이븐크리에이티브㈜<spna className='ms-2 text-secondary'>2016.10 ~ 2018.11 2년 2개월</spna></dt>
                    </dl>
                </div>
            </Accordion.Body>
            </Accordion.Item> */}
            {/* 성장과정 */}
            <Accordion.Item eventKey="2">
                <Accordion.Header>성장과정</Accordion.Header>
                <Accordion.Body>
                    <div>
                    [배움에 있어 도태되지 않겠습니다!]<br/>
                    약 6년간 웹디자이너로 근무하며, 단순히 시각적인 결과물만이 아니라 웹의 구조와 흐름을 이해하는 것이 직업연맹에 중요하다는 점을 깨달았습니다.
                    특히 진보하는 기술을 보며 개발과 디자인을 병행할 수 있는 역량의 중요성을 느꼈고, 이에 대한 관심을 꾸준히 가져왔습니다.<br/>
                    <br/>
                    하지만 현실적으로 장기간 시간을 투자해 배우는 데에는 여러 제약이 있었고, 그로 인해 미뤄왔던 배움을 올해는 더 이상 미룰 수 없다고 판단했습니다. 
                    웹디자이너로서 4월까지 근무한 뒤, 5월부터 11월까지 풀스택 개발 관련 학원에 등록해 프론트엔드 취업이라는 명확한 목표를 세우고 집중적으로 학습하였습니다.
                    <br/><br/>
                    Visual Studio Code를 활용해 Bootstrap, React 등 실무 중심의 기술을 익혔으며, 이를 기반으로 포트폴리오도 직접 제작하였습니다.
                    저는 배움에 있어 도태되지 않아야 된다고 생각하며, 항상 변화에 맞춰 도전해왔습니다. 앞으로는 디자인과 개발을 아우를 수 있는 디자이너로 활약하고 싶습니다!
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            {/* 전공선택의이유 */}
            <Accordion.Item eventKey="3">
                <Accordion.Header>전공 선택 이유와 적성</Accordion.Header>
                <Accordion.Body>
                특성화고 시절 처음 다뤄본 포토샵과 일러스트는 제게 큰 흥미를 주었고,
                다양한 자격증을 취득하며 실력을 쌓았습니다. <br/>이후 한국폴리텍대 산업디자인과 진학을 통해 디자인의 체계적인 기반을 다졌습니다.
                디자인 실무에 몸담으면서도 실무와 함께 기술적인 영역에 대한 호기심이 생겼고,
                올해 풀스택 과정을 배우며 디자인과 개발이 모두 가능한 디자이너로 성장하고 싶습니다!
                </Accordion.Body>
            </Accordion.Item>
            {/* 성격장단점 */}
            <Accordion.Item eventKey="4">
                <Accordion.Header>성격 장단점</Accordion.Header>
                <Accordion.Body>
                    <div>
                    [저의 강점은 소통력과 공감 능력입니다.]<br/>
                    첫 직장에서 다양한 업체와의 커뮤니케이션을 맡으며 ‘상대의 말을 끝까지 듣고, 3초간 생각한 뒤 대답한다’는 저만의 ‘삼초 법칙’을 만들어 실천하고 있습니다.
                    이 습관 덕분에 감정적 대화를 줄이고, 상대를 존중하는 협업 분위기를 만들어왔습니다.
                    <br/>
                    단점이라면 과거에는 조급한 성향이 있었지만, 이제는 경험을 통해 “속도보다 방향”이 중요하다는 것을 깨달았습니다. 현재는 긍정적이고 유연한 태도로 팀원간의 불화 없이 함께 소통하며 성장하는 것을 것을 가장 큰 보람으로 느끼고 있습니다.
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Alert>
    </Col>
    </Row>
    </Container>
    </>
  )
}

export default ResumeCom
