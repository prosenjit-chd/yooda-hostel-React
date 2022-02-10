import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import swal from 'sweetalert';

const AddStudents = () => {
    const [product, setProduct] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...product };
        newInfo[field] = value;
        setProduct(newInfo);
    }

    const handleSubmitProduct = e => {
        e.preventDefault();
        const newProduct = {
            ...product
        }
        newProduct["status"] = true;
        console.log(newProduct);
        axios.post('https://tutor-finder.herokuapp.com/tutors', newProduct)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Sucessful!",
                        text: "Successfully added!",
                        icon: "success",
                        button: "OK",
                    });
                    e.target.reset();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <div className="mx-auto shadow-lg p-5" style={{ maxWidth: '700px' }}>
                <h3 className="text-center fw-bold mb-2">Add Student</h3>
                <Form onSubmit={handleSubmitProduct}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridModel">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name="fullName" onBlur={handleOnBlur} type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMadeBy">
                            <Form.Label>Roll</Form.Label>
                            <Form.Control name="roll" onBlur={handleOnBlur} type="text" placeholder="Roll Number" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Age</Form.Label>
                            <Form.Control name="age" onBlur={handleOnBlur} type="text" placeholder="22" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Class</Form.Label>
                            <Form.Control name="class" onBlur={handleOnBlur} type="text" placeholder="10" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridImg">
                        <Form.Label>Hall Name</Form.Label>
                        <Form.Control name="hallName" onBlur={handleOnBlur} placeholder="Fatema Hall" />
                    </Form.Group>

                    <Button id="tutor-submit" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default AddStudents;