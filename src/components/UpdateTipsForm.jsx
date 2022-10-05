import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import { doc, updateDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const UpdateTipsForm = ({onTipsUpdated, tips, setShowEditForm}) => { 
    const { register, handleSubmit, formState: { errors }} = useForm()

    const onUpdateTips = async (data) => {
		await updateDoc(doc(db, 'tips', tips.id), {
			restaurantName: data.restaurantName,
            restaurantAdress: data.restaurantAdress,
            restaurantComment: data.restaurantComment,
		})

		toast.success("💪🏻 Tips uppdaterades!")
		onTipsUpdated()
	}
 
    return (
        <>
            <Row className="d-flex justify-content-start p-3">
				<Col xs={10}>
					<h2>Uppdatera tips</h2>
				</Col>
				<Col xs={2}>
                    <Button className="m-2" variant="dark" onClick={() => setShowEditForm(false)}>
                        Avbryt
                    </Button>
				</Col>
			</Row>
            <Form onSubmit={handleSubmit(onUpdateTips)} noValidate>
                <Form.Group className="mb-3" controlId="restaurantName">
                    <Form.Label>Restaurangens namn *</Form.Label>
                    <Form.Control
                        {...register("restaurantName", {
                            required: "Ange namnet på restaurangen",
                            minLength: {
                                value: 3,
                                message: "Namnet på restaurangen måste innehålla minst 3 tecken",
                            }
                        })} 
                        defaultValue={tips.restaurantName}
                        type="text"
                    />
                    {errors.restaurantName && <div className="invalid">{errors.restaurantName.message}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="restaurantAdress">
                    <Form.Label>Restaurangens adress</Form.Label>
                    <Form.Control
                        {...register("restaurantAdress")} 
                        defaultValue={tips.restaurantAdress}
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
                                defaultValue={tips.restaurantComment}
                        />
                    </Form.Group>
                    <p>* = obligatoriska fält</p>

                    <div className="d-flex justify-content-between">
                        <Button type="submit">Skicka tips</Button>
                    </div>
            </Form>
        </>
    )
}

export default UpdateTipsForm