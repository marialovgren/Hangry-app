import { useState } from 'react'
import GetMyLocation from './GetMyLocation'
import SearchField from './SearchField'
import ResultsList from './ResultsList'
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Sidebar = ({onSubmit, myLocation, city, setCity, restaurants}) => {
    const [open, setOpen] = useState(false)

    const resetCity = () => {
		setCity(null)
		setOpen(false)
	}

    return (
        <div className="searchBoxWrapper p-2">
            <Row>
                <Col xs={12}>
                    <div className="searchBox d-flex flex-row align-items-center">
                        <SearchField onSubmit={onSubmit} setOpen={setOpen}/>
                        <GetMyLocation  myLocation={myLocation} />
                        <Button variant='light' className="py-1 mx-2">
                            <FontAwesomeIcon icon={faXmark} onClick={resetCity}  />
                        </Button>
                    </div>
                </Col>
                
                {open && <ResultsList city={city} setCity={setCity} restaurants={restaurants} /> }
            </Row>
        </div>
    )
}

export default Sidebar