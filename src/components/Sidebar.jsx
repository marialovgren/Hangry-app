import { useState, useEffect } from 'react'
import GetMyLocation from './GetMyLocation'
import SearchField from './SearchField'
import ResultsList from './ResultsList'
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import useGetQueryRestaurants from '../hooks/useGetQueryRestaurants'


const Sidebar = ({onSubmit, myLocation, restaurants}) => {
    //open close form
    const [open, setOpen] = useState(false)
    const [city, setCity] = useState(null)
    const [queryCity, setQueryCity] = useState({
        city,
    }) 

    const resetCity = () => {
		setCity(null)
		setOpen(false)
	}

    //States of what the user has filtered restaurant on, render list differently depending on state
    const [nameOrder, setNameOrder] = useState('asc') //orders it ascending by default. set orderBy funktion to read NameOrder and sort it by descending or ascending. 
    
    //const [offer, setOffer] = useState('No filter') //All 
    const [querys, setQuerys] = useState({
        nameOrder,
    })

    //get Querys
    //const { data: restaurants, loading } = useGetQueryRestaurants(querys)

    useEffect( () => {
        console.log("order is " + nameOrder)
        console.log('querys.nameOrder',querys.nameOrder)

        const changeQuerys = async () => {
            setQuerys({
                nameOrder,
            })
        }
        changeQuerys()
    }, [nameOrder] )


    return (
        <>
        {/* Mobilversion */}
            <div className="searchBoxWrapperMobile p-2 d-md-none">
                <Row>

                    {/* SEARCH FIELD */}
                    <Col xs={12}>
                        <div className="searchBox d-flex flex-row align-items-center">
                            {/* Sökfält med sök-knapp */}
                            <SearchField onSubmit={onSubmit} setOpen={setOpen}/>
                               {/* Knapp för att hitta sin position*/}
                            <GetMyLocation  myLocation={myLocation} />
                               {/* Krysset. Resets det du sökt på*/}
                            <Button variant='light' className="py-1 mx-2">
                                <FontAwesomeIcon icon={faXmark} onClick={resetCity}  />
                            </Button>
                        </div>
                    </Col>

                    {/* LÄGG IN CHECKBOXES FÖR TYPES & OFFER */}

                    
                                <div>
                                {/*
                                <label htmlFor='sort-select-type'>Filter by type</label>
                                <select id='sort-select-type' className="form-select" onChange={(e)=>{setType(e.target.value)}} defaultValue={type}>
                                    <option value="no-filter">No filter</option>
                                    <option value="café">Café</option>
                                    <option value="restaurang">Restaurant</option>
                                </select>
                                
                                */}

                                <label htmlFor='sort-select-name-order'>Sort name: </label>
                                <select 
                                    id='sort-select-name-order' className="form-select" 
                                    onChange={(e) =>
                                        {setNameOrder(e.target.value)}} 
                                        defaultValue={nameOrder}> 
                                        <option value="asc">Acending</option>
                                        <option value="desc">Descending</option>
                                </select>
                            </div>

                   
                    {/* Listan med resultat av restauranger */}
                    {open &&  
                        <ResultsList city={city} setCity={setCity} restaurants={restaurants} querys={querys}/> }
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
