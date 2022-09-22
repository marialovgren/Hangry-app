import { Button, Form, ButtonGroup, DropdownButton, Dropdown, InputGroup, Col, Image, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import { Autocomplete } from '@react-google-maps/api'

const SearchBar = ({onSubmit}) => {

    const searchRef = useRef()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Getting ready to find a place")

        if (!searchRef.current.value) {
            return
        }

        onSubmit(searchRef.current.value)
    }

	return (
        <>
            <Row className="m-2">
                <Col xs={12} md={6} lg={4}>
                    <InputGroup>
                        <Form onSubmit={handleFormSubmit}  className="d-flex flex-row mt-2 border-danger border border-2 rounded">
                            <Form.Group>
                                 <Autocomplete> 
                                    <Form.Control
                                        type="search"
                                        placeholder="Hungry"
                                        aria-label="Search"
                                        ref={searchRef}
                                        required
                                    />
                                </Autocomplete> 
                                
                            </Form.Group>
                            <Button type="submit" variant="light" className=" ">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Button>
                        </Form>
                    </InputGroup> 
                </Col>

                <Col xs={12} md={6} lg={8} className="d-flex justify-content-md-end mt-2 mt-md-0">
                    <ButtonGroup className="mx-2 border border-2 border-danger mt-2">
                        <DropdownButton as={ButtonGroup} title="Typ av matställe" variant="light">
                            <Dropdown.Item href="#">Lunch</Dropdown.Item>
                            <Dropdown.Item href="#">Middag</Dropdown.Item>
                            <Dropdown.Item href="#">Snabbmat</Dropdown.Item>
                            <Dropdown.Item href="#">Foodtruck</Dropdown.Item>
                            <Dropdown.Item href="#">Café</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>

                    <ButtonGroup className="mx-2 border border-2 border-danger mt-2">
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
                            className="bg-dark mt-2"
                            roundedCircle
                        />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default SearchBar
