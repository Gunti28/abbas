import React from "react";
import { Container, Row, Col, Button, Navbar, Nav, Card } from "react-bootstrap";
import { MapPin, Phone, Award, Bed, User, Users, Heart, Layout, Ambulance, Video } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TeamCarousel.css"; 

const doctors = [
  { name: "Dr. Sarah Smith", image: `${process.env.PUBLIC_URL}/doctor1.jpg` },
  { name: "Dr. James Brown", image: `${process.env.PUBLIC_URL}/doctor2.jpg` },
  { name: "Dr. Emily Davis", image: `${process.env.PUBLIC_URL}/doctor3.jpg` },
  { name: "Dr. John Williams", image: `${process.env.PUBLIC_URL}/doctor4.jpg` },
  { name: "Dr. Robert Johnson", image: `${process.env.PUBLIC_URL}/doctor5.jpg` },
];

const services = [
  { name: "Cardiology", image: `${process.env.PUBLIC_URL}/cardiology.jpg` },
  { name: "Neurosurgery", image: `${process.env.PUBLIC_URL}/neurosurgery.jpg` },
  { name: "Gynaecology", image: `${process.env.PUBLIC_URL}/gynaecology.jpg` },
  { name: "Paediatrics", image: `${process.env.PUBLIC_URL}/paediatrics.jpg` },
];

const stats = [
  { label: "Years of Existence", value: 46, icon: Award },
  { label: "Bed Capacity", value: 305, icon: Bed },
  { label: "Specialists", value: 80, icon: User },
  { label: "Patients Seen Annually", value: "400,000", icon: Users },
  { label: "Intensive Care Beds", value: 14, icon: Heart },
  { label: "Neonatal Beds", value: 15, icon: Layout },
  { label: "Theaters", value: 7, icon: Ambulance },
  { label: "Critical Care Ambulance", value: 5, icon: Video },
];

const Home = () => {
  return (
    <div className="bg-light text-dark">
      
      {/* 🔹 Navbar */}
      <Navbar bg="white" expand="lg" className="shadow-sm mb-4">
        <Container>
          <Navbar.Brand href="#" className="text-danger fw-bold">SiteLogo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {["Home", "About Us", "Services", "Contact", "Team"].map((item) => (
                <Nav.Link href="#" key={item} className="text-dark">{item}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 🔹 Hero Section */}
      <Container className="text-center py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-md-start">
            <h5 className="text-danger">Welcome to Abbas Super Speciality Hospital</h5>
            <h1 className="text-primary fw-bold">Home of a Healthy Life 4ever</h1>
            <p className="text-secondary">We are committed to delivering exceptional care, advanced treatments, and a patient-centered experience.</p>
            <Button style={{ backgroundColor: "#7B68EE", color: "#fff" }} className="me-2">
              Book An Appointment
            </Button>
            <Button variant="outline-danger">
              <Video size={18} className="me-1" /> Video Call
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <img src={`${process.env.PUBLIC_URL}/DoctorAndPatient.jpg`} alt="Doctor and Patient" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Container>

      {/* 🔹 Specialty Section */}
      <Container className="py-5" style={{ backgroundColor: "#fdeef4" }}>
        <h2 className="text-center text-primary mb-3">Our Specialty</h2>
        <p className="text-center text-secondary mb-5">We provide world-class services with the best medical team!</p>
        <Row className="text-center">
          {stats.map((stat, index) => (
            <Col md={3} className="mb-4" key={index}>
              <Card className="p-3 shadow-sm rounded border-0 text-center d-flex flex-column align-items-center">
                <stat.icon size={32} className="text-danger mb-2" />
                <h4 className="text-danger mb-1">{stat.value}</h4>
                <p className="text-secondary">{stat.label}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 🔹 Our Services Section */}
      <Container className="py-5" style={{ backgroundColor: "#fdeef4" }}>
        <h2 className="text-center text-primary mb-4">Our Services</h2>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col md={3} sm={6} xs={12} className="mb-4" key={index}>
              <Card className="shadow-lg border-0 rounded-lg overflow-hidden">
                <div style={{ position: "relative" }}>
                  <Card.Img variant="top" src={service.image} alt={service.name} className="img-fluid" />
                  <div 
                    className="position-absolute bottom-0 w-100 text-white text-center py-2"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    {service.name}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
};

export default Home;