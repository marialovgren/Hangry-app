import { Row, Col, Image, Form, Button } from 'react-bootstrap'
import map from '../assets/images/map.png'
import SearchBar from '../components/SearchBar'

// Här tänker jag att vi visar kartan och listan över alla matställen, men innan en användare loggat in eller registrerat sig så är kartyn och listan täckt av en login/registrerings-ruta. Själv formuläret tar ca 40% av höjd och bredd och resten av bakgrunden är tranparent med en opacitet så att kartvyn och listan inte syns så tydligt. 


const HomePage = () => {


	return (
		<>
			{/* <Row className="opacity-50"> */}
			
				<div className="image-bg">
					<Image src={map} fluid />
				</div> {/* placeholder for real map */}

				<SearchBar />
				{/* <Col sm={4} className="bg-white">
					<Row className="p-4">
						<Form className="d-flex">
							<Col xs={9}>
								<Form.Control
									type="search"
									placeholder="Hungry?"
									aria-label="Search"
								/>
							</Col>
							<Col xs={3}>
								<Button variant="outline-success" className="mx-2">Search</Button>
							</Col>
						</Form>
					</Row>

					<Row>
						<Col xs={12} className="d-flex flex-column p-4">
							<div className="p-2">
								<div className="p-2 bg-light">	
									<h5>Restaurant-name</h5>
									<p>Info about the restaurant</p>
									<p>Links to contact details</p>
								</div>
								<hr />
								<div className="p-2 bg-light">	
									<h5>Restaurant-name</h5>
									<p>Info about the restaurant</p>
									<p>Links to contact details</p>
								</div>
								<hr />
								<div className="p-2 bg-light">	
									<h5>Restaurant-name</h5>
									<p>Info about the restaurant</p>
									<p>Links to contact details</p>
								</div>
								<hr />
								
							</div>
						</Col>
					</Row>
				</Col>
				<Col sm={8} className="p-0">
					<Image src={map} fluid /> 
				</Col> 
			</Row>*/}
		</>
	)
}

export default HomePage
