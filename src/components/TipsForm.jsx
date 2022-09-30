import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const TipsForm = ({ setShowTipsForm }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onCreateTips = async (data) => {
		await addDoc(collection(db, 'tips'), {
			completed: false,
			created: serverTimestamp(),
			restaurantName: data.restaurantName,
            restaurantAdress: data.restaurantAdress,
            restaurantComment: data.restaurantComment,
		})
		console.log("Tips skickat", data)
        toast.success("Tack för tipset!")
		reset()
    }

    return (

        <div className="py-3 tipsform">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title className="mb-3">Tips</Card.Title>
                                </Col>

                                <Col className="d-flex justify-content-end">
                                    <Button 
                                        onClick={ () => 
                                            setShowTipsForm(false)
                                            }
                                        type="cancel"
                                        >Avbryt
                                    </Button>
                                </Col>
                                
                                
                                <Card.Text className="my-3">Har du tips på ett matställe som saknas på kartan?</Card.Text>
                            </Row>
                            
                            <Form onSubmit={handleSubmit(onCreateTips)} noValidate>
                                <Form.Group controlId="restaurantName" className="mb-3">
                                    <Form.Label>Restaurangens namn *</Form.Label>
                                    <Form.Control 
                                        {...register("restaurantName", {
                                            required: "Ange namnet på restaurangen",
                                            minLength: {
                                                value: 3,
                                                message: "Namnet på restaurangen måste innehålla minst 3 tecken",
                                            }
                                        })} 
                                        type="text"
                                    />
                                    {errors.restaurantName && <div className="invalid">{errors.restaurantName.message}</div>}
                                </Form.Group>

                                <Form.Group controlId="restaurantAdress" className="mb-3">
                                    <Form.Label>Restaurangens adress</Form.Label>
                                    <Form.Control 
                                        {...register("restaurantAdress")} 
                                        type="text"
                                    />
                                </Form.Group>

                                <Form.Group controlId="restaurantComment" className="mb-3">
                                    <Form.Label>Kommentar?</Form.Label>
                                    <Form.Control 
                                        {...register("restaurantComment")} 
                                        as="textarea" 
                                        type="text"
                                        rows={3} 
                                    />
                                </Form.Group>
                                <p>* = obligatoriska fält</p>
                                <div className="d-flex justify-content-between">
                                    <Button type="submit">Skicka tips</Button>
                                </div>
                                
                            </Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
    )
}

export default TipsForm