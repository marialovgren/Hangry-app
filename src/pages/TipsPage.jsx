import useGetAllTips from "../hooks/useGetAllTips"
import TipsList from "../components/TipsList"
import { Container } from "react-bootstrap";

const TipsPage = () => {
	const { data: tips } = useGetAllTips('tips')
	
	return (
		<Container>
			<h1>Alla inkomna tips:</h1>
            <TipsList tips={tips} />
		</Container>
	)
}

export default TipsPage