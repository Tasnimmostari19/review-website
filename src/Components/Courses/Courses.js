import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./Courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])

    return (
        < div >
            {

                <Row xs={1} md={2} className="g-4">
                    {
                        courses.map(course => <Course course={course}></Course>)
                    }
                </Row>




            }

            <h1>Courses</h1>
        </div >
    );
};

export default Courses;