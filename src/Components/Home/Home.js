import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import Services from '../Services/Services';








const Home = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./Courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])

    const course = (courses.slice(0, 4));
    return (

        <div>



            <Row xs={1} md={2} className="g-4">
                {

                    course.map(service => <Services
                        service={service}
                    ></Services>)
                }
            </Row>

        </div>
    );
};

export default Home;