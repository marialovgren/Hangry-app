import { Container, Form, Navbar, Nav, Col, Image, Row, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
				<Col sm={12} md={4} className="mx-3">
					<Form.Control
						type="search"
						placeholder="Hungry?"
						aria-label="Search"
					/>
				</Col>

				<Col sm={8}>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">			
								<NavLink to="#" className="lunch">Lunch</NavLink>
							

							<Image 
								placeholder
								height={30}
								width={30}
								fluid
								className="bg-white mx-2"
								roundedCircle
							/>
								
						</Nav>
					</Navbar.Collapse>
				</Col>
		</Navbar>
	)
}

export default Navigation
