import { Container, Button, Form, ButtonGroup, DropdownButton, Dropdown, Navbar, NavDropdown, Nav, Col, Image, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const SearchBar = () => {
	return (
        <>
      {/*    <Navbar bg="light" expand="lg" className="searchbar">
            <Container fluid className="flex-sm-col">  */}
            <Row className="m-2">
                <Col xs={12} md={6} lg={4}>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Hungry"
                        className="mx-2 "
                        aria-label="Search"
                    />
                    <Button variant="success">Search</Button>
                    </Form>
                </Col>
                <Col xs={12} md={6} lg={8} className="d-flex justify-content-md-end mt-2 mt-md-0">
                    <ButtonGroup className="mx-2 border border-2">
                        <DropdownButton as={ButtonGroup} title="Typ av matställe" variant="light">
                            <Dropdown.Item href="#">Lunch</Dropdown.Item>
                            <Dropdown.Item href="#">Middag</Dropdown.Item>
                            <Dropdown.Item href="#">Snabbmat</Dropdown.Item>
                            <Dropdown.Item href="#">Foodtruck</Dropdown.Item>
                            <Dropdown.Item href="#">Café</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>

                    <ButtonGroup className="mx-2 border border-2">
                        <DropdownButton as={ButtonGroup} title="Utbud" variant="light" >
                            <Dropdown.Item href="#">Lunch</Dropdown.Item>
                            <Dropdown.Item href="#">After Work</Dropdown.Item>
                            <Dropdown.Item href="#">Middag</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                    <div>
                        <Image 
                            height={40}
                            width={40}
                            fluid
                            className="bg-dark"
                            roundedCircle
                        />
                    </div>
                </Col>
            </Row>


                {/* <Col sm={12} md={4}>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="mx-2 "
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Col> */}

                    {/* <Nav
                        className="me-auto my-2 my-lg-0 d-flex flex-row"
                        navbarScroll
                    >
                        <NavDropdown title="Typ av matställe" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Lunch</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Middag</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Snabbmat</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Foodtruck</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Café</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Utbud" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Lunch</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">After Work</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Middag</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> */}
             {/*    </div> */}
           {/*   </Container>
                    </Navbar>  */}
        </>
    )
}

export default SearchBar
