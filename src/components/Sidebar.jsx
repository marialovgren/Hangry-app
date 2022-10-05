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



// import { useState, useEffect } from 'react'
// import GetMyLocation from './GetMyLocation'
// import SearchField from './SearchField'
// import ResultsList from './ResultsList'
// import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'
// import mapAPI from '../services/mapAPI'
// import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

// const Sidebar = ({onSubmit, userPosition, city, setCity, restaurants}) => {
//     const [open, setOpen] = useState(false)

//     const resetCity = () => {
// 		setCity(null)
// 		setOpen(false)
// 	}

// 	// const [ cityWhere, setCityWhere ] = useState('Malmö')
// 	// const [ queryLimits, setQueryLimits ] = useState({
// 	// 	cityWhere,
// 	// })


// 	// useEffect(() => {
// 	// 	const changeCityWhere = async () => {
// 	// 		setCityWhere(await mapAPI.getSearchedCity(userPosition))
// 	// 	}
// 	// 	changeCityWhere()
// 	// }, [userPosition])

//     return (
//         <>
//         {/* Mobilversion */}
//             <div className="searchBoxWrapperMobile p-2 d-md-none">
//                 <Row>
//                     <Col xs={12}>
//                         <div className="searchBox d-flex flex-row align-items-center">
//                             <SearchField onSubmit={onSubmit} setOpen={setOpen}/>
//                             {/* <GetMyLocation  myLocation={myLocation} /> */}
							
// 							{ cityWhere && (<>
// 								<Button
// 								type="submit" size="sm" variant="light"
// 								className="locateme-position border"
// 							>
// 								{cityWhere}
// 								<FontAwesomeIcon icon={faLocationArrow} />
// 							</Button>
//                             <Button variant='light' className="py-1 mx-2">
//                                 <FontAwesomeIcon icon={faXmark} onClick={resetCity}  />
//                             </Button></>
// 							)}
							
							
//                         </div>
//                     </Col>
                    
//                     {open && <ResultsList city={city} setCity={setCity} restaurants={restaurants} /> }
//                 </Row>
//             </div>

//             {/* Desktopversion */}
//             <div className="searchBoxWrapper p-2 d-none d-md-block">
//                 <Row>
//                     <Col xs={12}>
//                         <div className="searchBox d-flex flex-row align-items-center">
//                             <SearchField onSubmit={onSubmit} setOpen={setOpen}/>
//                             {/* <GetMyLocation  myLocation={myLocation} /> */}
// 							{ cityWhere && (<>
// 								<Button
// 								type="submit" size="sm" variant="light"
// 								className="locateme-position border"
// 							>
// 								{cityWhere}
// 								<FontAwesomeIcon icon={faLocationArrow} />
// 							</Button>
//                             <Button variant='light' className="py-1 mx-2">
//                                 <FontAwesomeIcon icon={faXmark} onClick={resetCity}  />
//                             </Button></>
// 							)}
//                         </div>
//                     </Col>
                    
//                     {open && <ResultsList city={city} setCity={setCity} restaurants={restaurants}  /> }
//                 </Row>
//             </div>
//         </>
//     )
// }

// export default Sidebar