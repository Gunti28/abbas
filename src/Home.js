import React from "react";
import { Container, Row, Col, Button, Navbar, Nav, Card } from "react-bootstrap";
import { MapPin, Phone, Award, Bed, User, Users, Heart, Layout, Ambulance, Video } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TeamCarousel.css"; 

const doctors = [
  { name: "Dr. Sarah Smith", image: "/doctor1.jpg" },
  { name: "Dr. James Brown", image: "/doctor2.jpg" },
  { name: "Dr. Emily Davis", image: "/doctor3.jpg" },
  { name: "Dr. John Williams", image: "/doctor4.jpg" },
  { name: "Dr. Robert Johnson", image: "/doctor5.jpg" }
];

const Home = () => {
    const icons = [Award, Bed, User, Users, Heart, Bed, Layout, Ambulance, Video];
  return (
    <div className="bg-light text-dark">
      {/* Header */}
      <Navbar bg="white" expand="lg" className="shadow-sm mb-4">
        <Container>
          <Navbar.Brand href="#" className="text-pink-500 fw-bold">SiteLogo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="text-dark">Home</Nav.Link>
              <Nav.Link href="#" className="text-dark">About Us</Nav.Link>
              <Nav.Link href="#" className="text-dark">Services</Nav.Link>
              <Nav.Link href="#" className="text-dark">Contact</Nav.Link>
              <Nav.Link href="#" className="text-dark">Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container className="text-center py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-md-start">
            <h5 className="text-pink-500">Welcome to Abbas Super Speciality Hospital</h5>
            <h1 className="text-primary fw-bold">Home of a Healthy Life 4ever</h1>
            <p className="text-secondary">We are committed to delivering exceptional care, advanced treatments, and a patient-centered experience.</p>
            <Button style={{ backgroundColor: "#7B68EE", color: "#fff" }} className="me-2">
            Book An Appointment
            </Button>
            <Button variant="outline-danger"> <Video size={18} className="me-1" /> Video Call</Button>
          </Col>
          <Col md={6} className="text-center">
          <img src="/Doctor&Patient.jpg" alt="Doctor and Patient" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Container>
      
      {/* Location & Contact */}
      <Container className="py-4 text-center">
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <MapPin className="text-danger me-2" />302-3 OMR, Market Road, Goutham Nagar, Pune, 902319
          </Col>
          <Col md={6}>
            <Phone className="text-danger me-2" />+91 949-475-1795
          </Col>
        </Row>
      </Container>

      {/* Specialty Section */}
       {/* Specialty Section */}
       <Container className="py-5" style={{ backgroundColor: "#fdeef4" }}>
        <h2 className="text-center text-primary mb-3">Our Specialty</h2>
        <p className="text-center text-secondary mb-5">We provide the world class services with the best medical team!</p>
        <Row className="text-center">
          {['Years of Existence', 'Bed capacity', 'Specialists', 'Patients Seen Annually', 'Intensive Care Beds', 'Neonatal Beds', 'Theaters', 'Critical care Ambulance'].map((item, index) => {
            const Icon = icons[index];
            return (
              <Col md={3} className="mb-4" key={index}>
               <Card className="p-3 shadow-sm rounded-lg border-0 text-center d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-center align-items-center mb-2" style={{ height: '50px' }}>
                        <Icon size={32} className="text-pink-500" />
                    </div>
                <h4 className="text-pink-500 mb-1">{[46, 305, 80, '400,000', 14, 15, 7, 5][index]}</h4>
                    <p className="text-secondary">{item}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="mt-5 p-4 rounded-" style={{ backgroundColor: "#fff", borderColor: "#ff6b81" }}>
  <h3 className="text-center text-primary mb-3">All Aspects Of Medical Practice</h3>
  <p className="text-center text-secondary">The health and well-being of our patients and their healthcare team will always be our priority, so we follow the best practices for cleanliness.</p>

  <Row className="text-center mt-4">
    {[
      { name: "Examination", icon: Heart },
      { name: "Lab Tests", icon: Award },
      { name: "Prescription", icon: Layout },
      { name: "Wellness Service", icon: Users },
      { name: "Book Specialists", icon: User },
      { name: "Alerts", icon: Phone },
    ].map((service, index) => {
      const Icon = service.icon;
      return (
        <Col md={2} xs={6} className="mb-4" key={index}>
          <div className="d-flex align-items-center justify-content-center rounded-circle shadow-sm"
            style={{
              width: "80px", 
              height: "80px",
              background: "linear-gradient(135deg, #ff6b81, #ff98a8)",
            }}>
            <Icon size={32} className="text-white" />
          </div>
          <p className="text-secondary mt-4 fw-bold text-start">{service.name}</p>
        </Col>
      );
    })}
  </Row>
</Container>
<Container className="mt-5 text-center">
  <h2 className="text-primary fw-bold">Our Clinic Facility</h2>
  <Row className="mt-4">
    {[
      { title: "High-Tech Equipment", description: "Our hospital includes modern diagnostic machines such as MRI, CT scans, ventilators, and surgical instruments to ensure the best medical care.", image: "/Equipment.jpg" },
      { title: "Caring Staff", description: "Our dedicated doctors, nurses, and support staff ensure compassionate care and patient safety.", image: "/Staff.jpg" },
      { title: "Comfortable Stretchers", description: "We provide high-quality patient beds and stretchers designed for maximum comfort and efficiency.", image: "/Stretcher.jpg" },
    ].map((facility, index) => (
      <Col md={4} key={index} className="mb-4">
        <Card className="shadow-sm border-0 rounded-lg">
          <Card.Img variant="top" src={facility.image} className="rounded-top" />
          <Card.Body>
            <h5 className="text-danger">{facility.title}</h5>
            <p className="text-secondary">{facility.description}</p>
            <Button variant="danger">Read More</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
{/* Our Services Section */}
<Container className="py-5" style={{ backgroundColor: "#fdeef4" }}>
  <h2 className="text-center text-primary mb-4">Our Services</h2>
  <Row className="justify-content-center">
    {[
      { name: "Cardiology", image: "/cardiology.jpg" },
      { name: "Neurosurgery", image: "/neurosurgery.jpg" },
      { name: "Gynaecology", image: "/gynaecology.jpg" },
      { name: "Paediatrics", image: "/paediatrics.jpg" },
    ].map((service, index) => (
      <Col md={3} sm={6} xs={12} className="mb-4" key={index}>
        <Card className="shadow-lg border-0 rounded-lg overflow-hidden">
          <div style={{ position: "relative" }}>
            <Card.Img variant="top" src={service.image} className="img-fluid" />
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