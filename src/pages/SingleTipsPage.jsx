import { Container, Col, Row, ListGroup, Button, ButtonGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import RestaurantForm from '../components/RestraurantForm'
import useGetTips from '../hooks/useGetTips'
import TipsCard from '../components/TipsCard'
import WarningAlert from '../components/WarningAlert'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import {useState} from 'react'
import UpdateTipsForm from '../components/UpdateTipsForm'

const SingleTipsPage = () => {
    const { id } = useParams()
	const { data: tips, error, isError, isLoading } = useGetTips(id)
    const [showEditForm, setShowEditForm] = useState(false)
    const [showAddRestaurantForm, setShowAddRestaurantForm] = useState(false)

    const onTipsUpdated = () => {
		setShowEditForm(false)
	}

    const onRestaurantAdded = () => {
		setShowAddRestaurantForm(false)
	}

    const toggleTips = async () => {
		const ref = doc(db, 'tips', id)
		await updateDoc(ref, {
			completed: !tips.completed,
		})
	}
     
    return (
        <Container className="my-3">
            {isLoading && <p>Laddar in tips.... </p>}

            {isError && <WarningAlert message={error.message} />}

            {tips && <>
                <TipsCard tips={tips}/>
            </>}

            <Row className="tips-actions">
                <Col>
                    <Button variant="dark" className="m-2" onClick={toggleTips}>Toggle</Button>
                    <Button className="m-2" variant="dark" onClick={() => setShowEditForm(!showEditForm)}>
                    {showEditForm ? 'Avbryt' : 'Uppdatera'}
                    </Button>
                    <Button className="m-2" variant="dark" onClick={() => setShowAddRestaurantForm(!showAddRestaurantForm)}>
                    {showAddRestaurantForm ? 'Avbryt' : 'Lägg till'}
                    </Button>
                </Col>
			</Row>

			{showEditForm && <>
				<hr className="my-4" />
				<UpdateTipsForm onTipsUpdated={onTipsUpdated} tips={tips} />
			</>}

            {showAddRestaurantForm && <>
				<hr className="my-4" />
				<RestaurantForm onRestaurantAdded={onRestaurantAdded} tips={tips} />
			</>}

         </Container>
        
    )
}
 
export default SingleTipsPage