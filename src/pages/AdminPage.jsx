import useGetAllUsers from "../hooks/useGetAllUsers"
import AdminList from "../components/AdminList"
import { Container } from "react-bootstrap";
import AdminNavigation from "../components/NavigationAdmin"


const AdminPage = () => {
	const { data: users } = useGetAllUsers("users")
	
	return (
		<>
			<AdminNavigation admin={users} /> {/* send admin as prop to Navbar so it can be displayed in Dropdown later */}
			
			<Container>

				<div className="flex flex-col overflow-hidden">
					<div className="gap-4 p-4">
						<div className="flex">
							<h1 className="text-center">Admins</h1>
						</div>
					</div>

				<div className="d-flex justify-content-center">
					<h2>Användare</h2>
				</div>
				<AdminList users={users} />

					<hr className="my-4 mb-4" />
				</div>
			</Container>
		</>	
	)
}

export default AdminPage