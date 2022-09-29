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
                Header: 'Profilbild',
                accessor: 'photoURL',
				Cell: tableProps => (
					<img	
						src={tableProps.row.original.photoURL}
						width={50}
					/>
				) 
            },
            {
                Header: 'Namn',
                accessor: 'name', 
            },
			{
                Header: 'Email',
                accessor: 'email', 
            },
        ]
    }, [])

	console.log("users: ", users)
	
	return (
		<>
			<AdminNavigation />
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