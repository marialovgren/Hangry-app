import useGetAllUsers from "../hooks/useGetAllUsers"
import { useState } from "react"
import AdminList from "../components/AdminList"
import { Container } from "react-bootstrap";

const AdminPage = () => {
	const [showAdminsTable, setShowAdminsTable] = useState(false);
	const { data: admin } = useGetAllUsers("admin")

	const handleShowAdminsTable = () => {
		setShowAdminsTable(!showAdminsTable)
	}
	
	return (
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
	)
}

export default AdminPage