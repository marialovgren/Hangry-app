import { Button, Form, ButtonGroup, DropdownButton, Dropdown, InputGroup, Col, Image, Row, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { useAuthContext } from "../contexts/AuthContext"
import TipsForm from "../components/TipsForm"

const SearchBar = ({ onSubmit }) => {
    const searchRef = useRef()
    const { showTipsForm, setShowTipsForm } = useAuthContext()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Getting ready to find a place")

        if (!searchRef.current.value) {
            return
        }

        onSubmit(searchRef.current.value)

        console.log("The place you chose is: ", searchRef.current.value)
    }

	return (
        <>
        <Navbar bg="danger" variant="dark" className="p-0">
            <Row className="m-2 w-100">
                <Col xs={12} md={6} lg={4}>
                    <InputGroup>
                        <Form onSubmit={handleFormSubmit}  className="d-flex flex-row border-danger border border-2 rounded">
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
                            <Button type="submit" variant="light">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Button>
                        </Form>
                    </InputGroup> 
                </Col>

                <Col xs={12} md={6} lg={8} className="d-flex justify-content-md-end mt-2 mt-md-0">
                    <ButtonGroup className="mx-2 border border-4 border-danger">
                        <DropdownButton as={ButtonGroup} title="Typ av matställe" variant="light">
                            <Dropdown.Item href="#">Lunch</Dropdown.Item>
                            <Dropdown.Item href="#">Middag</Dropdown.Item>
                            <Dropdown.Item href="#">Snabbmat</Dropdown.Item>
                            <Dropdown.Item href="#">Foodtruck</Dropdown.Item>
                            <Dropdown.Item href="#">Café</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>

                    <ButtonGroup className="mx-2 border border-4 border-danger">
                        <DropdownButton as={ButtonGroup} title="Utbud" variant="light" >
                            <Dropdown.Item href="#">Lunch</Dropdown.Item>
                            <Dropdown.Item href="#">After Work</Dropdown.Item>
                            <Dropdown.Item href="#">Middag</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>

                    <ButtonGroup className=" border border-4 border-danger">
                        <Button 
                            variant="light"
                            onClick={ () => 
                            setShowTipsForm(true)
                            }
                        >
                            Tipsa oss
                        </Button>
                    </ButtonGroup>
                    <div>
                        <Image 
                            height={40}
                            width={40}
                            fluid
                            className="bg-light"
                            roundedCircle
                        />
                    </div>
                </Col>
            </Row>
        </Navbar>

        {showTipsForm && 
				<TipsForm showTipsForm={showTipsForm} setShowTipsForm={setShowTipsForm} 
			/>} 
        </>
    )
}

export default SearchBar
