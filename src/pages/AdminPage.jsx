import useGetAllUsers from "../hooks/useGetAllUsers"
import { useState } from "react"
import AdminList from "../components/AdminList"
import { Container } from "react-bootstrap";
import AdminNavigation from "../components/NavigationAdmin"


const AdminPage = () => {
	const [showAdminsTable, setShowAdminsTable] = useState(false);
	const { data: admin } = useGetAllUsers("admin")
	console.log("admin is" + admin) //no admins for now

	const handleShowAdminsTable = () => {
		setShowAdminsTable(!showAdminsTable)
	}
	
	return (
		<>
			<AdminNavigation admin={admin} /> {/* send admin as prop to Navbar so it can be displayed in Dropdown later */}
			
			<Container>

				<div className="flex flex-col overflow-hidden">
					<div className="gap-4 p-4">
						<div className="flex">
							<h1 className="text-center">Admins</h1>
						</div>
					</div>

					<div className="d-flex justify-content-center">
						<button
							className="btn btn-primary"
							onClick={handleShowAdminsTable}
						>
							Användare
						</button>
					</div>
					{showAdminsTable && <AdminList admin={admin} />}

					<hr className="my-4 mb-4" />
				</div>
			</Container>
		</>	
	)
}

export default AdminPage