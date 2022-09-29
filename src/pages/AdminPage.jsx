import useGetAllUsers from "../hooks/useGetAllUsers"
import { Container } from "react-bootstrap"
import AdminNavigation from "../components/AdminNavigation"
import AdminList from "../components/AdminList"
import { Container } from "react-bootstrap";

const AdminPage = () => {
	const { data: users } = useGetAllUsers("users")
	
	return (
		<>
			<AdminNavigation />
			<Container>
				<div className="flex flex-col overflow-hidden">
					<div className="gap-4 p-4">
						<div className="flex">
							<h1 className="text-center">Admins</h1>
						</div>
					</div>

				<AdminList users={users} />

					<hr className="my-4 mb-4" />
				</div>
			</Container>
		</>	
	)
}

export default AdminPage