import { NavLink } from 'react-router-dom'
import { Navbar,
		Nav,
		Button,
	 	ButtonGroup, 
		DropdownButton, 
		Dropdown, 
		Col, 
		Image, 
		Row } from 'react-bootstrap'

const Navigation = ( { admin } ) => { //addds admin-object to put links to different admins i nav
	return (
		<Navbar bg="danger" variant="dark" className="p-0">
			<Row className="m-2 w-100">
                <Col xs={6} md={6} lg={4}>

                    <ButtonGroup className=" border border-4 border-danger">
						<Nav.Link  as={NavLink} end to="/admin-page">
							<Button 
								variant="light"
								className="mx-2"
							>
								Admins	
							</Button>
						</Nav.Link>
						<Nav.Link  as={NavLink} end to="/tips">
							<Button 
								variant="light"
								className="mx-2"
							>
								Tips	
							</Button>
						</Nav.Link>
						<Nav.Link  as={NavLink} end to="/restaurants">
							<Button 
								variant="light"
								className="mx-2"
							>
								Restauranger	
							</Button>
						</Nav.Link>
                    </ButtonGroup>	

				</Col>

				<Col xs={6} md={6} lg={8} className="p-0 d-flex justify-content-end align-items-center"> 
					{/* Update Profile Page */}
                    <ButtonGroup className=" border border-4 border-danger">
						<Nav.Link  as={NavLink} end to="/update-profile">
							<Button 
								variant="light"
							>
								Update Profile	
							</Button>
							</Nav.Link>
                    </ButtonGroup>

					{/* Profile Picture */}					
						<Image 
							height={40}
							width={40}
							fluid
							className="bg-light"
							roundedCircle
						/>
				</Col>
			
			</Row>	
		</Navbar>
	)
}

export default Navigation
