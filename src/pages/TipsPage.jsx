import useGetAllTips from "../hooks/useGetAllTips"
import { useMemo } from 'react'
import { Container } from "react-bootstrap"
import SortableTable from "../components/SortableTable"

const TipsPage = () => {
	const { data: tips, error, isError, isLoading } = useGetAllTips('tips')

    const columns = useMemo(() => {
        return [
            {
                Header: 'Namn',
                accessor: 'restaurantName', 
            },
            {
                Header: 'Adress',
                accessor: 'restaurantAdress', 
            },
            {
                Header: 'Kommentar',
                accessor: 'restaurantComment', 
            },
            {
                Header: 'Avklarad',
                accessor: 'completed', 
            }
        ]
    }, [])
	
	return (
		<Container>
			<h1>Alla inkomna tips:</h1>

            {isLoading && (<p>Loading....</p>)}

            {isError && (<p>{error.message}</p>)}

            {tips && <SortableTable columns={columns} data={tips} />}
            
		</Container>
	)
}

export default TipsPage