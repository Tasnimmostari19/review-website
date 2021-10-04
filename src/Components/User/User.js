import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './User.css'

const User = () => {
    return (
        <div>
            <h2>User Info</h2>
            <div className='input'>
                <InputGroup className="mb-3 w-50">
                    <FormControl
                        placeholder="username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">Username</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3 w-50">
                    <FormControl
                        placeholder="Name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">Name</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3 w-50">
                    <FormControl
                        placeholder="Email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3 w-50">
                    <FormControl
                        placeholder="Phone"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">Phone</InputGroup.Text>
                </InputGroup>

            </div>
        </div>
    );
};

export default User;