import { NavLink } from 'react-router-dom'
import { Navbar,
		Nav,
		Button,
	 	ButtonGroup, 
		DropdownButton, 
		Container,
		Dropdown, 
		Col, 
		Image, 
		NavDropdown,
		Row } from 'react-bootstrap'
		import { useAuthContext } from '../contexts/AuthContext'

const Navigation = ( { admin } ) => { //addds admin-object to put links to different admins i nav
	const { currentUser, userName, userEmail, userPhotoUrl } = useAuthContext()

	return (
		<Navbar bg="dark" variant="dark" className="p-2" expand="md">
			<Container>
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

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto align-items-center">
						{
							currentUser ? (
								<>
									<Nav.Link as={NavLink} end to="/">
										<Button 
											variant="light"
											className="mx-2"
										>
											Till kartan	
										</Button>
									</Nav.Link>

									<NavDropdown title={
										userPhotoUrl
											? <Image
												src={userPhotoUrl}
												height={30}
												width={30}
												fluid
												roundedCircle
											  />
											: userName || userEmail
									}>
										<NavLink to="/update-profile" className="dropdown-item">Update Profile</NavLink>
										<NavDropdown.Divider />
										<NavLink to="/logout" className="dropdown-item">Log Out</NavLink>
									</NavDropdown>
								</>
							) : (
								<>
									{/* No user is logged in */}
									<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
									<Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
								</>
							)
						}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
