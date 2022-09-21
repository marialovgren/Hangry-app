import { doc, collection, addDoc, getDocs, serverTimestamp, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const CreateTipsForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onCreateTips = async (data) => {
        // make firestore doc
		await addDoc(collection(db, 'tips'), {
			completed: false,
			created: serverTimestamp(),
			restaurantName: data.restaurantName,
            restaurantAdress: data.restaurantAdress,
            restaurantComment: data.restaurantComment,
		})
		console.log("Tips skickat", data)
		reset()
    }

    return (
        
        <Form onSubmit={handleSubmit(onCreateTips)} noValidate>
			<Form.Group controlId="restaurantName" className="mb-3">
				<Form.Label>Restaurang</Form.Label>
				<Form.Control 
                    {...register("restaurantName", {
                        required: "Vad heter restaurangen/Caféet som du vill tipsa om?",
                        minLength: {
                            value: 3,
                            message: "Namnet på restaurangen måste innehålla minst 3 tecken",
                        }
                    })}  
                    placeholder="Vad heter restaurangen/Caféet som du vill tipsa om?"
					type="text"
                />
                {errors.restaurantName && <div className="invalid">{errors.restaurantName.message}</div>}
			</Form.Group>

			<Form.Group controlId="restaurantAdress" className="mb-3">
				<Form.Label>Adress</Form.Label>
				<Form.Control 
                    {...register("restaurantAdress")}  
                    placeholder="Om du har adressen på restaurangen får du gärna skriva den här"
					type="text"
                />
			</Form.Group>

            <Form.Group controlId="restaurantComment" className="mb-3">
                <Form.Label>Kommentar?</Form.Label>
                <Form.Control 
                     {...register("restaurantComment")} 
                    type="textarea" rows={3} 
                />
            </Form.Group>

            <div className="d-flex justify-content-between">
				<Button type="submit">Skicka tips</Button>
                <Button type="cancel">Avbryt</Button>
            </div>
		</Form>

    )

}

export default CreateTipsForm