import Navbar  from 'react-bootstrap/Navbar'
import Nav  from 'react-bootstrap/Nav'
import Container  from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button  from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './ArticlePost.css'


export default function ArticlePost(){
    return(
        <>
        <section id="info">
        🤩Access a heap of free books with a SitePoint account <button>Get Started</button>
        </section>
        <section id="navbar">
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
        </section>
        <section id="hero-section">
            <Container>
                <Row>
                <Col lg={5}>
              <h1>Frequently Asked Questions</h1>
              <br/>
              <h3>Why is it important to learn to code?</h3>
              <p>There are many reasons why learning to code is important. Coding can help you think analytically and solve problems more effectively. It can also be used to automate tasks that would otherwise be tedious or time-consuming. In addition, coding is a great way to express your creativity. 
                  And as you learn more and become more experienced, you will only be limited by your imagination.</p>
<br/>
<h3>How long does it take to learn to code?</h3>
<p>That depends on your level of experience and commitment. For someone with no prior experience, it could take anywhere from a few weeks to a few months to learn the basics of coding. However, if you’re already familiar with basic programming concepts, you can learn to code more quickly.
     And if you’re dedicated to learning and practicing regularly, you can become proficient in a shorter amount of time.</p>
          <br/>
          <h3>Is it worth learning to code in 2022?</h3>  
          <p>Yes. Development is a high-paying field, with a median salary of $93,000 in the United States. Coding is a skill that will continue to be in high demand in the future. 
              As technology advances, the need for coders will only increase.</p>
              <br/>
              <h3>Is coding a good career in 2022?</h3>
              <p>Yes, coding is a good career in 2022. The demand for coders is expected to continue to grow in the coming years, so it is a great time to start a career in development. In addition, coding offers a high potential salary and the opportunity to work remotely, which are both attractive features of this career.</p>
         
       
          <Row>
              <Col lg={2}>
                  <img src="https://uploads.sitepoint.com/wp-content/uploads/2022/03/1646968566jf4@2x-120x120.jpg" className='img-fluid'></img>
              </Col>
              <Col lg={10}>
                  <p><strong>Joel Falconer</strong></p>
                  <p>Joel Falconer is the managing editor of SitePoint. 
                      In the past he's worked at The Next Web, Envato, DesignCrowd, and AppStorm.</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
</svg>
              </Col>
          </Row>
          </Col>
          </Row>
          </Container>
        </section>
        </>
    )
}