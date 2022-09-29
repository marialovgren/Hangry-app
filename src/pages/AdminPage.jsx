import useGetAllUsers from "../hooks/useGetAllUsers"
import { useMemo } from 'react'
import { Container } from "react-bootstrap";
import AdminNavigation from "../components/NavigationAdmin"
import SortableTable from "../components/SortableTable"

const AdminPage = () => {
	const { data: users, error, isError, isLoading } = useGetAllUsers('users')

	const columns = useMemo(() => {
        return [
            {
                Header: 'Email',
                accessor: 'email', 
            },
			{
                Header: 'uid',
                accessor: 'uid', 
            },
            {
                Header: 'Profilbild',
                accessor: 'photo', 
            },
        ]
    }, [])
	
	return (
		<>
			<AdminNavigation admin={users} /> {/* send admin as prop to Navbar so it can be displayed in Dropdown later */}
			
			<Container>
				<h1>Alla admins:</h1>

				{isLoading && (<p>Loading....</p>)}

				{isError && (<p>{error.message}</p>)}

				{users && <SortableTable columns={columns} data={users} />}

			</Container>
		</>	
	)
}

export default AdminPage