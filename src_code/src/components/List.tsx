import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faLaptop, faUserGroup } from "@fortawesome/free-solid-svg-icons";

function List() {
    return(
    <ListGroup>
      <ListGroup.Item className='listItem' action href="#work">
      <FontAwesomeIcon icon={faBriefcase} className='iconStyle' />
        Work
      </ListGroup.Item>
      <ListGroup.Item className='listItem' action href="#personal">
      <FontAwesomeIcon icon={faLaptop} className='iconStyle' />
        Personal
      </ListGroup.Item>
      <ListGroup.Item className='listItem' action href="#social">
      <FontAwesomeIcon icon={faUserGroup} className='iconStyle' />
        Social
      </ListGroup.Item>
    </ListGroup>
    );
}

export default List;