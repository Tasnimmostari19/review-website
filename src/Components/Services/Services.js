import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Services = (props) => {
    const { name, rating, image } = props.service;
    return (
        <div>
            <Col className='m-5'>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {rating}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default Services;