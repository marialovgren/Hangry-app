import { NavLink, Link } from 'react-router-dom'
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

const AdminNavigation = () => { 
	const { currentUser, userName, userEmail, userPhotoUrl } = useAuthContext()

	return (
		<Navbar bg="dark" variant="dark" className="p-2" expand="md" sticky="top">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Hangry App - Admins
				</Navbar.Brand>	

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto align-items-center">
						{
							currentUser && (
								<>
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
										<NavLink to="/" className="dropdown-item">Kartvy</NavLink>
										<NavDropdown.Divider />
										<NavLink to="/restaurants" className="dropdown-item">Restauranger</NavLink>
										<NavDropdown.Divider />
										<NavLink to="/tips" className="dropdown-item">Tips</NavLink>
										<NavDropdown.Divider />
										<NavLink to="/admin-page" className="dropdown-item">Administratörer</NavLink>
										<NavDropdown.Divider />
										<NavLink to="/update-profile" className="dropdown-item">Uppdatera profil</NavLink>
										<NavDropdown.Divider />
										<NavLink to="/logout" className="dropdown-item">Logga ut</NavLink>
									</NavDropdown>
								</>
							) 
						}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default AdminNavigation
