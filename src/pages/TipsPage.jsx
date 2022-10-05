import useGetAllTips from "../hooks/useGetAllTips"
import { useMemo } from 'react'
import { Container, Button } from "react-bootstrap"
import SortableTable from "../components/SortableTable"
import { Link } from "react-router-dom"

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
                Header: 'Visa',
                Cell: ({row: {original: tip} }) =>
                <Button 
                    variant="primary" 
                    size="sm" 
                    as={Link} to={`/tips/${tip.id}`}
                    >
                    Visa
                </Button>
            },
            {
                Header: 'Avklarad',
                Cell: ({row: {original: tip} }) =>
                <span>{tip.completed ? 'Ja' : 'Nej'}</span>
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