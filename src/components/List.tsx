import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css'

function List() {
    return(
    <ListGroup className='custom-list'>
      <ListGroup.Item className='listItem' action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item className='listItem' action href="#link2">
        Link 2
      </ListGroup.Item>
      <ListGroup.Item className='listItem' action href="#link3">
        Link 3
      </ListGroup.Item>
    </ListGroup>
    );
}

export default List;