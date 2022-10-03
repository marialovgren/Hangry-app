import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import { doc, updateDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

        //import React from 'react'
        //import RestaurantPage from '../pages/RestaurantPage'

const UpdateRestaurantForm = ({ restaurant, onRestaurantUpdated, setShowUpdateRestaurantForm,  }) => { //sends setShowUpatedRestaurantForm - state true, //tar emot en restaurang som en prop, samt funktionen onRestaurantUpdate
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    //updates document in collection "restaurants"
    const onUpdateRestaurant = async (data) => {
		await updateDoc(doc(db, 'restaurants', restaurant.id), { //update doc in collection "restaurants"
            //contains these values:
           // updated: serverTimestamp(),
			restaurantName: data.restaurantName, 
            restaurantStreetName: data.restaurantStreetName,
            restaurantStreetNumber: data.restaurantStreetNumber,
            restaurantZipCode: data.restaurantZipCode, 
            restaurantCity: data.restaurantCity,
            restaurantDescription: data.restaurantDescription,
            restaurantCuisine: data.restaurantCuisine,
            restaurantType: data.restaurantType, //Saves a choice of 1 type only
            restaurantOffer: data.restaurantOffer, //Saves a choice of 1 offer only
            restaurantEmail: data.restaurantEmail,
            restaurantTelephone: data.restaurantTelephone,
            restaurantWebsite: data.restaurantWebsite,
            restaurantFacebook: data.restaurantFacebook,
            restaurantInstagram: data.restaurantInstagram,           
		})
        console.log("updated restaurant, this one " + restaurant.restaurantName)
        toast.success("Restaurangen är uppdaterad!")
        onRestaurantUpdated()//om vi skulle redigera ett formulär igen vill vi att den nya infon visas
        //resets form
		reset()
        //sends Admin back to restaurant Page View when succesfullt adding a restaurant
        setShowUpdateRestaurantForm(false) 
       
    }

 
    return (

        <div className="tipsform">
            <Row>
                <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-3">Uppdatera restaurang</Card.Title>
                            
                            <Form onSubmit={handleSubmit(onUpdateRestaurant)} noValidate>  {/*takes in the Restaurant-collection */}
                            
                                <Row>
                                    {/* Name. Required */}
                                    <Form.Group as={Col} controlId="restaurantName" className="mb-3">{/*ID */}
                                        <Form.Label>Restaurangens namn *</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantName", {   //Spread of register..... + saves it in restaurantName(ID)
                                                required: "Ange namnet på restaurangen",
                                                minLength: {
                                                    value: 3,
                                                    message: "Namnet på restaurangen måste innehålla minst 3 tecken",
                                                }
                                            })} 
                                            
                                            size="sm"
                                            type="text"
                                        />
                                        {errors.restaurantName && <div className="invalid">{errors.restaurantName.message}</div>}
                                    </Form.Group>

                                    {/*Telephone field. Not required */}
                                    <Form.Group as={Col} controlId="restaurantTelephone" className="mb-3">
                                        <Form.Label>Telefonnummer</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantTelephone", {
                                                minLength: {
                                                    value: 5,
                                                    message: "Minst 5 siffror",
                                                }
                                            })} 
                                            size="sm"
                                            type="number"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    {/* Adress 1 name. Required */}
                                    <Form.Group controlId="restaurantStreetName" className="mb-3">
                                        <Form.Label>Adress: gata *</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantStreetName", {
                                                required: "Ange restaurangens gatuadress",
                                                minLength: {
                                                    value: 5,
                                                    message: "Adressen måste innehålla minst 5 tecken",
                                                }
                                            })} 
                                            size="sm"
                                            type="text"
                                        />
                                    </Form.Group>
                        
                                    {/* Adress 2 number. Required */}
                                    <Form.Group controlId="restaurantStreetNumber" className="mb-3">
                                        <Form.Label>Adress: nummer *</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantStreetNumber", {
                                                required: "Fullständig adress krävs",
                                                minLength: {
                                                    value: 1,
                                                    message: "Numret måste innehålla minst ett tecken. Du kan kombinera bokstäver och siffror",
                                                }
                                            })} 
                                            size="sm"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row> 
                                     {/* Zip Code. Required (as in adress and number) */}
                                   <Form.Group as={Col} controlId="restaurantZipCode" className="mb-3">
                                        <Form.Label>Postnummer *</Form.Label>
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
                                        <Form.Label>Stad *</Form.Label>
                                        <Form.Control 
                                            {...register("restaurantCity", {
                                                required: "Ange restaurangens stad",
                                                minLength: {
                                                    value: 2,
                                                    message: "Stadens namn måste innehålla minst 2 tecken",
                                                }
                                            })} 
                                            size="sm"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Row>

                                {/* Description. Required*/}
                                <Form.Group controlId="restaurantDescription" className="mb-3">
                                    <Form.Label>Beskrivning om restaurangen *</Form.Label>
                                    <Form.Control 
                                        {...register("restaurantDescription", {
                                            required: "Ange en beskrivning om restaurangen",
                                            minLength: {
                                                value: 3,
                                                message: "Beskrivningen om restaurangen måste innehålla minst 3 tecken",
                                            }
                                        })} 
                                        size="sm"
                                        as="textarea"
                                        type="text" 
                                    />
                                </Form.Group>

                                {/* Cuisine. Required*/}
                                <Form.Group controlId="restaurantCuisine" className="mb-3">
                                    <Form.Label>Typ av kök *</Form.Label>
                                    <Form.Control 
                                        {...register("restaurantCuisine", {
                                            required: "Ange typ av kök",
                                            minLength: {
                                                value: 3,
                                                message: "Typ av kök måste innehålla minst 3 tecken",
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
                                            Typ *
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
                                            Offer *
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
                
                                {/*Email.*/}
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
                                    <p>* = obligatoriska fält</p>
                                </Row>
                                
                                {/*Buttons - Submit + Leave*/}
                                <div className="d-flex justify-content-between">
                                <Button 
                                    onClick={ () => 
                                        setShowUpdateRestaurantForm(false) //close Form
                                        }
                                    type="cancel">Avbryt</Button>
                                    <Button type="submit">Uppdatera</Button>
                                </div>
                            </Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
    )
}

export default UpdateRestaurantForm