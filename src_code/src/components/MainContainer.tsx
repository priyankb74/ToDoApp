import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css"
import NavBar from "./Navbar"; 
import List from './List';


function MainContainer() {
    return (
        <Container fluid>
            <Row>
                <Col md={2} 
                    className="container1">
                    <Row className="innerTopPadding">
                        <h2>To-Do</h2>
                    </Row>               
                    <Row className="innerTopPadding">
                        <NavBar />
                    </Row>
                    <Row className="innerTopPadding">
                        <NavBar />
                    </Row>
                                     
                </Col>
                <Col md={5} 
                    className='container2'>
                    
                </Col>
                <Col md={5} 
                    className='container1'>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default MainContainer;
