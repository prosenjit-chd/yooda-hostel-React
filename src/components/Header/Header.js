import Dropdown from '@restart/ui/esm/Dropdown';
import React from 'react';
import { useHistory } from 'react-router';
import { Container, Nav, Navbar, Button, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ArrowsMove, BagCheckFill, Basket2Fill, BoxArrowInLeft, Coin, NodePlusFill, PersonPlusFill, PlusSquareFill } from 'react-bootstrap-icons';
import './Header.css'

const Header = () => {
    const history = useHistory();

    const activeStyle = {
        fontWeight: "bold",
        color: "#165aee",
        borderBottom: "solid 2px #165aee"
    }


    return (
        <>
            {/* Bootstrap Tag use here  */}
            <Navbar variant="light" expand="lg" className="border border-bottom-2 fixed-top bg-light" style={{ "backgroundColor": "rgba(0, 0, 0, 0)" }}>
                <Container fluid>
                    <NavLink style={{ color: "#165aee" }} className="navbar-brand fw-bold" to="/home"> <img style={{ height: 60, width: 60 }} src="https://png.pngtree.com/element_our/png_detail/20181129/male-student-icon-png_251938.jpg" alt="banner" />Yooda Hostel</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fw-bold">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="home">Home</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/distribution">Distribution</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/aboutus">About Us</NavLink>

                            <div>
                                <DropdownButton variant="info" className="d-inline ms-3 me-3 mx-auto" id="dropdown-basic-button" title="@ Admin Portal">
                                    <NavLink className="nav-link" activeStyle={activeStyle} to="/allstudents"><Basket2Fill className="me-1" /> Students</NavLink>
                                    <NavLink className="nav-link" activeStyle={activeStyle} to="/addstudents"><PersonPlusFill className="me-1" /> Add Student</NavLink>
                                    <NavLink className="nav-link" activeStyle={activeStyle} to="/addfoods"><NodePlusFill className="me-1" /> Add Food</NavLink>
                                    <NavLink className="nav-link" activeStyle={activeStyle} to="/allfoods"><ArrowsMove className="me-1" /> Foods</NavLink>
                                </DropdownButton>

                            </div>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ marginTop: 90 }}>

            </div>
        </>
    );
};

export default Header;