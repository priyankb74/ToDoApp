import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cards() {
  return (
    <div>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-end">
            <Badge bg="success">Active Task</Badge>
          </div>
          <Card.Title>Send UI/UX presentation mail</Card.Title>
          <Card.Text className='cardTextDesc'>
            20 Apr,2021
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-end">
            <Badge bg="warning">Completed</Badge>
          </div>
          <Card.Title>Email presentation to clients</Card.Title>
          <Card.Text className='cardTextDesc'>
            22 Apr,2021
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-end">
            <Badge bg="primary">Upcoming</Badge>
          </div>
          <Card.Title>Creating Business Strategy</Card.Title>
          <Card.Text className='cardTextDesc'>
            8 July,2021
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    
  );
}

export default Cards;