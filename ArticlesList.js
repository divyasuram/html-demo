import Navbar  from 'react-bootstrap/Navbar'
import Nav  from 'react-bootstrap/Nav'
import Container  from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button  from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './ArticlesList.css'

export default function ArticlesList() {
    return(
        <>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
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
<section id="hero">
    <Container>
    <Row> 
        <Col lg={1}></Col>
        <Col lg={4}> 
        <h1>Browse our courses curated with the best artists in the industry only for you.</h1>
    <p>Gain access to a thriving community of artists when you take a course with us.</p>
    </Col>
    <Col lg={7}></Col>
    </Row>
    </Container>
    </section>
    <section id="articles-grid">
    <Container className={"mt-5"} id="titles">
  <Row>
    <Col>
    <img className="title-image" src="https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png"></img>
    <h3>Unboxing Content Creation</h3>
    </Col>
    <Col >
        <img src="https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png">
        </img>
        <h3>  Unboxing Content Writing and Blogging</h3>
    </Col>
    <Col>
    <img src="https://www.unboxingart.in/wp-content/uploads/2021/09/Creative-Writing-300x300.png"></img>
    <h3>Unboxing Creative Writing (2 weeks)</h3>
    </Col>
  </Row>
</Container>
    </section>
        </>
    )
}