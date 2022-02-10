import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import swal from 'sweetalert';

const Distribution = () => {
    const emailRef = useRef('');
    const handleAdminSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const user = { email };
        axios.put('https://tutor-finder.herokuapp.com/users/admin', user)
            .then(res => {
                if (res.data.modifiedCount) {
                    swal({
                        title: "Sucessful!",
                        text: `"${email}" register as ADMIN`,
                        icon: "success",
                        button: "OK",
                    });
                    e.target.reset();
                }
            })
            .catch(err => console.log(err))
    }




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
        <>
            <Container>
                <div className="mx-auto shadow-lg p-5" style={{ maxWidth: '600px' }}>
                    <h3 className="text-center fw-bold">Search Student</h3>
                    <Form onSubmit={handleAdminSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Roll Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter roll number" />
                        </Form.Group>

                        <Button className="" variant="success" type="submit">
                            Search
                        </Button>
                    </Form>
                </div>
            </Container>
            <Container className='mt-3'>
                <div className="mx-auto shadow-lg p-5" style={{ maxWidth: '700px' }}>
                    <h3 className="text-center fw-bold mb-2">Student Information</h3>
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
                                <Form.Label>Date</Form.Label>
                                <Form.Control name="age" onBlur={handleOnBlur} type="date" />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                                <Form.Label>Shift</Form.Label>
                                <select className="form-select" name="status" onBlur={handleOnBlur}>
                                    <option value="day">Day</option>
                                    <option value="night">Night</option>
                                </select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                                <Form.Label>Food Item</Form.Label>
                                <select className="form-select" name="status" onBlur={handleOnBlur}>
                                    <option value="false">Chicken</option>
                                    <option value="true">Mutton</option>
                                </select>
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                                <Form.Label>Status</Form.Label>
                                <select className="form-select" name="status" onBlur={handleOnBlur}>
                                    <option value="false">NotServed</option>
                                    <option value="true">Served</option>
                                </select>
                            </Form.Group>
                        </Row>


                        <Button id="tutor-submit" variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default Distribution;