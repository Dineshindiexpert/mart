import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'; 
import Users from '../data/users';

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSignInSubmit = (data) => {
    const user = Users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    // Outer Center Wrapper using React Bootstrap Fluid Container
    <Container fluid className="min-vh-100 bg-light d-flex justify-content-center align-items-center p-3 p-sm-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Main Card Wrapper */}
      <Card className="border-0 shadow-lg overflow-hidden w-100" style={{ maxWidth: '1040px', borderRadius: '24px' }}>
        <Row className="g-0">
          
          {/* Left Side Brand Panel Column */}
          <Col xs={12} lg={5} className="d-flex flex-column justify-content-between p-4 p-md-5 text-white" 
               style={{ background: 'linear-gradient(135deg, #FF7E40, #FE480B)', minHeight: '350px' }}>
            
            <div className="fs-3 fw-bolder tracking-wide">mart</div>
            
            <div className="my-4">
              <h2 className="fw-bold display-6 mb-3">Welcome Back!</h2>
              <p className="opacity-75 lh-base small d-none d-sm-block">
                Discover your sales analytics data records in a clean premium dashboard panel context.
              </p>
            </div>
            
            <div className="small opacity-50 d-none d-sm-block">© 2026 Mart Analytics Inc.</div>
          </Col>

          {/* Right Side Form Inputs Panel Column */}
          <Col xs={12} lg={7} className="bg-white p-4 p-md-5 d-flex flex-column justify-content-center">
            
            <div className="mb-4">
              <h3 className="fw-bold text-dark h2 mb-1">Sign In to Account</h3>
              <p className="text-muted small">Please enter your registered credentials below</p>
            </div>

            <Form onSubmit={handleSubmit(onSignInSubmit)}>

              {/* Email Input Field */}
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label className="small fw-semibold text-secondary mb-2">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  size="lg"
                  className={`fs-6 rounded-3 shadow-none ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="name@domain.com"
                  style={{ height: '48px' }}
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                  })}
                />
                {errors.email && (
                  <Form.Control.Feedback type="invalid" className="small mt-1">
                    {errors.email.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              {/* Password Input Field */}
              <Form.Group className="mb-4 pb-2" controlId="formPassword">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Form.Label className="small fw-semibold text-secondary m-0">Password</Form.Label>
                  <a href="#forgot" className="small fw-semibold text-decoration-none text-danger">
                    Forgot Password?
                  </a>
                </div>
                <Form.Control
                  type="password"
                  size="lg"
                  className={`fs-6 rounded-3 shadow-none ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="••••••••"
                  style={{ height: '48px' }}
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum length should be 6 characters" }
                  })}
                />
                {errors.password && (
                  <Form.Control.Feedback type="invalid" className="small mt-1">
                    {errors.password.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              {/* Action Submit Button */}
              <Button 
                type="submit" 
                size="lg"
                className="w-100 text-white fw-semibold fs-6 border-0 rounded-3 bg-danger"
                style={{   height: '48px' }}
                onMouseOver={(e) => e.target.style.backgroundColor = 'bg-warning'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'bg-warning'}
              >
                Sign In
              </Button>

              {/* Form Link Footer Switcher */}
              <div className="text-center mt-4">
                <span className="text-muted small">Don't have an account? </span>
                <Link to="/signup" className="small fw-semibold text-decoration-none text-danger" >
                  Register Here
                </Link>
              </div>

            </Form>
          </Col>

        </Row>
      </Card>

    </Container>
  );
};

export default SignIn;
