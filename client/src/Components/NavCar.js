import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"
import '../App.css'

 const NavCar = () => {
     return (
         <div>
                <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
         </div>
     )
 }

 export default NavCar