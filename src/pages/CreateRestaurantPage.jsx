import AdminNavigation from "../components/NavigationAdmin"
import { Container, Row, Col } from "react-bootstrap"
import useGetAllUsers from "../hooks/useGetAllUsers"

const CreateRestaurantPage = () => {
    const { data: users } = useGetAllUsers("users")

	return (
        <>
            <AdminNavigation admin={users} /> {/* send admin as prop to Navbar so it can be displayed in Dropdown later */}

            <Container>
                <h1>Formulär för att skapa ny restaurang</h1>
            </Container>
		</>	
	)
}

export default CreateRestaurantPage
