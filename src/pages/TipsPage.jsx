import useGetAllTips from "../hooks/useGetAllTips"
import { useMemo, Link } from 'react'
import { Container, Button } from "react-bootstrap"
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
                Header: 'Lägg till',
                Cell: ({row: {original: tip} }) =>
                <Button 
                    variant="primary" 
                    size="sm" 
                    as={Link} to={`/tips/${tip.id}`}
                    >
                    Lägg till
                </Button>
            },
            {
                Header: 'Avklarad',
                accessor: 'completed', 
            }
        ]
    }, [])
	
	return (
        <>
            <Container className="my-3">
                <h1>Alla inkomna tips:</h1>

                {isLoading && (<p>Loading....</p>)}

                {isError && (<p>{error.message}</p>)}

                {tips && <SortableTable columns={columns} data={tips} />}
                
            </Container>
        </>
	)
}

export default TipsPage