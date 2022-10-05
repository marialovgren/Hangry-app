import { useState } from 'react'
import GetMyLocation from './GetMyLocation'
import SearchField from './SearchField'
import ResultsList from './ResultsList'
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Sidebar = ({onSubmit, myLocation, restaurants}) => {
    const [open, setOpen] = useState(false)
    const [city, setCity] = useState(null)
    const [queryCity, setQueryCity] = useState({
        city,
    })  

    const resetCity = () => {
		setCity(null)
		setOpen(false)
	}

    return (
        <>
        {/* Mobilversion */}
            <div className="searchBoxWrapperMobile p-2 d-md-none">
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

            {/* Desktopversion */}
            <div className="searchBoxWrapper p-2 d-none d-md-block">
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
        </>
    )
}

export default Sidebar