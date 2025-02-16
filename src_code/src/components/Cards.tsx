import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function Cards() {

  interface Task {
    task_id: string;
    task_title: string;
    task_desc: string;
  }
  
  const [tasks, setTasks] = useState<Task[]>([]); // ✅ Now TypeScript knows the type
  

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/data')
          .then(response => {
          setTasks(response.data);
        })
    }, []);

  return (
    <div>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-end">
            <Badge bg="success">Active Task</Badge>
          </div>
          {tasks.map((item, index) => (
          <Card.Title key={index}>{item.task_desc}</Card.Title>
          ))}
          <Card.Text className='cardTextDesc'>
            20 Apr,2021
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <br />
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
      </Card> */}
    </div>
    
  );
}

export default Cards;