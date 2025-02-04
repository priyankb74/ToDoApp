import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css"
import NavBar from "./Navbar"; 
import FilterList from './FilterList';
import AddTask from "./AddTask";
import CreateList from "./CreateList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import Cards from "./Cards";


function MainContainer() {
    return (
        <Container fluid>
            <Row>
                <Col md={2} 
                    className="container1">
                    <Row className="innerTopPadding">
                        <h2 className="mainHeader">
                            <FontAwesomeIcon icon={faListCheck} className='iconStyle'/>
                            To-Do
                        </h2>
                    </Row>               
                    <Row className="innerTopPadding">
                        <NavBar />
                    </Row>
                    <Row className="innerTopPadding">
                        <CreateList />
                    </Row>
                    <Row className="innerTopPadding">
                        <FilterList />
                    </Row>
                    <Row className="innerTopPadding">
                        <AddTask />
                    </Row>
                                     
                </Col>
                <Col md={5} 
                    className='container2'>
                    <Row className="innerTopPadding">
                        <SearchBar />
                    </Row>
                    <Row className="innerTopPadding">
                        <h2 className="mainHeader">
                            Work
                        </h2> 
                        <text className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard.</text>
                    </Row>
                    <Row className="innerTopPadding">
                        <Cards />
                    </Row>
                    <Row className="innerTopPadding">
                        
                    </Row>
                </Col>
                <Col md={5} 
                    className='container1'>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default MainContainer;
