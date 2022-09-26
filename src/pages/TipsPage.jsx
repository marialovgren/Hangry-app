import useGetAllTips from "../hooks/useGetAllTips"
import TipsList from "../components/TipsList"
import { useMemo } from 'react'
import { Container } from "react-bootstrap"

const TipsPage = () => {
	const { data: tips, error, isError, isLoading } = useGetAllTips('tips')

    const columns = useMemo(() => {
        return [
            {
                Header: 'Restaurangens namn',
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

            {tips && <TipsList tips={tips} />}
            
		</Container>
	)
}

export default TipsPage