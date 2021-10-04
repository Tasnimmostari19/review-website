import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const { name, image, description, rating, price } = (props.course);
    return (
        <div>
            <Col className='m-5'>
                <Card>
                    <Card.Img variant="top" src={image} className='img-fluid' />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            Rating: {rating}
                        </Card.Text>
                        <Card.Text>
                            Price: ${price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;