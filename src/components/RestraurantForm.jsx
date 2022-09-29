import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import mapAPI from '../services/mapAPI'

const RestaurantForm = ({ setShowRestaurantForm }) => { //sends setShowRestaurantForm - state true
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    //creates collection "restaurants"
    const onCreateRestaurant = async (data) => {
		await addDoc(collection(db, 'restaurants'), { //add to collection "restaurants"
            //contains these values:
			created: serverTimestamp(),
			restaurantName: data.restaurantName, //controlID = restaurantName
            restaurantAdress: data.restaurantAdress,
            restaurantZipCode: data.restaurantZipCode, 
            restaurantCity: data.restaurantCity,
            restaurantDescription: data.restaurantDescription,
            restaurantCuisine: data-restaurantCuisine,
            restaurantType: data.restaurantType, //Saves a choice of 1 type only
            restaurantOffer: data.restaurantOffer, //Saves a choice of 1 offer only
            restaurantEmail: data.restaurantEmail,
            restaurantTelephone: data.restaurantTelephone,
            restaurantWebsite: data.restaurantWebsite,
            restaurantFacebook: data.restaurantFacebook,
            restaurantInstagram: data.restaurantInstagram,
            coordinates: await mapAPI.getLatAndLong(data.restaurantAdress + data.restaurantCity),
           
		})
        toast.success("Restaurangen är tillagd!")
        //resets form
		reset()
        //sends Admin back to restaurant Page View when succesfullt adding a restaurant
        setShowRestaurantForm(false) 
    }

 
    return (

        <div className="tipsform">
            <Row>
                <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-3">Lägg till en ny restaurang</Card.Title>
                            
                            <Form onSubmit={handleSubmit(onCreateRestaurant)} noValidate>  {/*takes in the Restaurant-collection */}
                                <Row>

                                    {/* Name. Required */}
                                    <Form.Group as={Col} controlId="restaurantName" className="mb-3">{/*ID */}
                                        <Form.Label>Restaurangens namn</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantName", {   //Spread of register..... + saves it in restaurantName(ID)
                                                required: "Ange namnet på restaurangen",
                                                minLength: {
                                                    value: 3,
                                                    message: "Namnet på restaurangen måste innehålla minst 3 tecken",
                                                }
                                            })} 
                                            size="sm" //css
                                            type="text"
                                        />
                                        {errors.restaurantName && <div className="invalid">{errors.restaurantName.message}</div>}
                                    </Form.Group>

                                    {/*Telephone field. Not required */}
                                    <Form.Group as={Col} controlId="restaurantTelephone" className="mb-3">
                                        <Form.Label>Telefonnummer</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantTelephone")} 
                                            size="sm"
                                            type="number"
                                        />
                                    </Form.Group>
                                </Row>

                                 {/* Adress. Required */}
                                 {/*TODO: lägg till att den kräver nummer också */}
                                <Form.Group controlId="restaurantAdress" className="mb-3">
                                    <Form.Label>Gatunamn och nummer</Form.Label>
                                    <Form.Control 
                                        {...register("restaurantAdress", {
                                            required: "Ange restaurangens adress",
                                            minLength: {
                                                value: 8,
                                                message: "Adressen måste innehålla minst 8 tecken",
                                            }
                                        })} 
                                        size="sm"
                                        type="text"
                                    />
                                </Form.Group>

                                <Row> 
                                     {/* Zip Code. Required */}
                                   <Form.Group as={Col} controlId="restaurantZipCode" className="mb-3">
                                        <Form.Label>Postnummer</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantZipCode", {
                                                required: "Ange restaurangens postnummer",
                                                minLength: {
                                                    value: 5,
                                                    message: "Postnumret måste innehålla minst 5 siffror",
                                                }
                                            })} 
                                            size="sm"
                                            type="number"
                                        />
                                    </Form.Group>
 
                                    {/* City. Required*/}
                                    <Form.Group as={Col} controlId="restaurantCity" className="mb-3">
                                        <Form.Label>Stad</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantCity", {
                                                required: "Ange restaurangens stad",
                                                minLength: {
                                                    value: 3,
                                                    message: "Stadens namn måste innehålla minst 3 tecken",
                                                }
                                            })} 
                                            size="sm"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Row>

                                {/* Description. Required*/}
                                <Form.Group controlId="restaurantDescription" className="mb-3">
                                    <Form.Label>Beskrivning om restaurangen</Form.Label>
                                    <Form.Control 
                                        {...register("restaurantDescription", {
                                            required: "Ange en beskrivning om restaurangen",
                                            minLength: {
                                                value: 10,
                                                message: "Beskrivningen om restaurangen måste innehålla minst 10 tecken",
                                            }
                                        })} 
                                        size="sm"
                                        as="textarea"
                                        type="text" 
                                    />
                                </Form.Group>

                                {/* Cuisine. Required*/}
                                <Form.Group controlId="restaurantCuisine" className="mb-3">
                                    <Form.Label>Typ av kök</Form.Label>
                                    <Form.Control 
                                        {...register("restaurantCuisine", {
                                            required: "Ange typ av kök",
                                            minLength: {
                                                value: 5,
                                                message: "Typ av kök måste innehålla minst 5 tecken",
                                            }
                                        })} 
                                        size="sm"
                                        as="textarea"
                                        type="text" 
                                    />
                                </Form.Group>


                                {/*Only select one option*/}          
                                <Row>
                                     {/* Form for type. Required */}
                                    <Form.Group as={Col} controlId="restaurantType" className="mb-3">  
                                        <Form.Label as="legend">
                                            Typ
                                        </Form.Label>
                                        <Form.Select {...register("restaurantType", {
                                                    required: "Fill in a type",
                                                })}  
                                                className='form-select'>
                                                <option value='café'>Café</option>
                                                <option value='restaurang'>Restaurang</option>
                                                <option value='snabbmat'>Snabbmat</option>
                                                <option value='kiosk-grill'>Kiosk/Grill</option>
                                                <option value='foodtruck'>Foodtruck</option>
                                            </Form.Select>   
                                    </Form.Group>

                                    {/* Form for Offer. Required */}
                                    <Form.Group as={Col} controlId="restaurantOffer" className="mb-3">  
                                        <Form.Label as="legend">
                                            Offer
                                        </Form.Label>
                                        <Form.Select {...register("restaurantOffer", {
                                                    required: "Fill in an offer",
                                                })}  
                                                className='form-select'>
                                                <option value='lunch'>Lunch</option>
                                                <option value='after-work'>After Work</option>
                                                <option value='middag'>Middag/Á la carte</option>
                                            </Form.Select>   
                                    </Form.Group>
                                </Row>
                
                                

                                {/*Email*/}
                                <Row> 
                                   <Form.Group as={Col} controlId="restaurantEmail" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantEmail")} 
                                            size="sm"
                                            type="email"
                                        />
                                    </Form.Group>
                                </Row>
                                
                                {/*Website*/}
                                <Row>
                                    <Form.Group as={Col} controlId="restaurantWebsite" className="mb-3">
                                        <Form.Label>Hemsida</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantWebsite")} 
                                            size="sm"
                                            type="text"
                                        />
                                    </Form.Group>

                                    {/*Facebook*/}
                                    <Form.Group as={Col} controlId="restaurantFacebook" className="mb-3">
                                        <Form.Label>Facebook</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantFacebook")} 
                                            size="sm"
                                            type="text"
                                        />
                                    </Form.Group>

                                    {/*Instagram*/}
                                    <Form.Group as={Col} controlId="restaurantInstagram" className="mb-3">
                                        <Form.Label>Instagram</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantInstagram")} 
                                            size="sm"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Row>
                                
                                {/*Buttons - Submit + Leave*/}
                                <div className="d-flex justify-content-between">
                                <Button 
                                    onClick={ () => 
                                        setShowRestaurantForm(false) //close Form
                                        }
                                    type="cancel">Avbryt</Button>
                                    <Button type="submit">Lägg till</Button>
                                </div>
                            </Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
    )
}

export default RestaurantForm