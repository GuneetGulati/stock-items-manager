import React from "react";
import Login from "./Login";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Homepage.css";
import Footer from "./Footer";
import PriceCards from "./PriceCards";


function Homepage() {
  return (
    <div className="homepage">
      
      <Navbar className="nav" variant="light">
        <Container>
          <Navbar.Brand>
            <h5 className="number">My Billbook</h5>
          </Navbar.Brand>
        </Container>
        <Nav className="me-auto">
        <p className="nav-element"> <Nav.Link expand="lg" > Why Use My BillBook?</Nav.Link></p>
         <p className="nav-element"> <Nav.Link > Who is it For?</Nav.Link></p>
         <p className="nav-element"> <Nav.Link > Online Store</Nav.Link></p>
         <p className="nav-element"> <Nav.Link > Pricing</Nav.Link></p>
         <p className="nav-element"> <Nav.Link > FAQs</Nav.Link></p>
        </Nav>
      </Navbar>

      <div className="row">
        <div className="col-md-8">
          <h2 className="hello">
            Simple GST Billing & Stock Management
            <br /> software for your business
            <br /> Atma Nirbhar Vyapaari bane
          </h2>
        </div>
        <div className="col-md-4">
          <Login />
        </div>
      </div>

      <div className="digits">
        <div>
          <h1>1,00,000+ </h1>
          <p> businesses Trust us </p>
        </div>
        <div>
          <h1>30,00,000+ </h1>
          <p>Invoices created </p>
        </div>
        <div>
          <h1>5,000+</h1>
          <p>Cities & Towns in India </p>
        </div>
        <div>
          <h1>4.5 Star</h1>
          <p> Rating on Google Play</p>
        </div>
      </div>

      <div className="linethree">
        <h2>Now try all benefits of My Billbook app</h2>
        <h2 className="freebold">Free for 14 days</h2>
      </div>

      <div>
        <PriceCards/>
      </div>


      <Footer/>
    </div>
  );
}

export default Homepage;
