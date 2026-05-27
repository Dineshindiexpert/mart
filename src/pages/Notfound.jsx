import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
 

const NotFound = () => {
  return (
    <Container fluid
      className="notfound-wrapper vh-100 d-flex justify-content-center align-items-center text-center position-relative overflow-hidden"
    >
      <div className="glow-effect"></div>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>

          <h1 className="error-404 fw-bold mb-3">
            404
          </h1>

          <Badge pill className="error-badge mb-4 px-3 py-2">
            LOST IN SPACE
          </Badge>

          <h2 className="fw-bold mb-3 text-light">
            Page Not Found
          </h2>

          <p className="error-text mb-4">
            The route you are trying to access does not exist
            or has been permanently moved to another sector
            destination.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">

            <Button
              href="/dashboard"
              variant="light"
              className="dashboard-btn fw-semibold px-4 py-2 rounded-4"
            >
              Back to Dashboard
            </Button>
            {/* routes cannot be defined now  */}
            <Button href="/dashboard" variant="outline-secondary" className="rounded-4" >
               Contact Support
            </Button>

          </div>

        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;