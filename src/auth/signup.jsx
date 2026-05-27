import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Redirection ke liye hook
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Navigation initialize kiya

  const onSignUpSubmit = (data) => {
    // 1. Pehle se localStorage mein save saare users ka data nikalo (agar pehle se kuch nahi hai toh fallback khali array [])
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // 2. Check karo ki naya email pehle se exist toh nahi karta array mein
    const isEmailTaken = existingUsers.some(user => user.email.toLowerCase() === data.email.toLowerCase());

    if (isEmailTaken) {
      alert("This email address is already registered!");
      return;
    }

    // 3. User object taiyar kiya password mapping ke sath
    const newUserData = {
      fullName: data.fullName,
      email: data.email,
      password: data.password // Hash backend layer par hoti hai, temporary browser safety storage
    };

    // 4. Array mein user push kiya aur stringify karke string layer storage update ki
    existingUsers.push(newUserData);
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

    alert(" Account created successfully! Please login now.");
    
    // 5. User ko smooth authentication process ke liye default route (Sign In) par redirect kiya
    navigate('/'); 
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center p-3">
      <Container className="d-flex justify-content-center m-0 p-0">
        <Card className="shadow border-0 rounded-4 overflow-hidden w-100" style={{ maxWidth: '900px', minHeight: '560px' }}>
          <Row className="g-0 h-100 align-items-stretch">
            {/* Left Side Panel */}
            <Col md={5} className="d-flex flex-column justify-content-between p-4 p-md-5 text-white text-center text-md-start" style={{ background: 'linear-gradient(135deg, #FF7E40, #FE480B)' }}>
              <div className="fs-3 fw-black" style={{ letterSpacing: '0.5px' }}>mart</div>
              <div className="mt-4 mt-md-0">
                <h2 className="fw-bold display-6 mb-3">Join the Mart!</h2>
                <p className="text-white-50 small lh-lg d-none d-md-block">
                  Register now to monitor your global store statistics updates inside one unified hub platform.
                </p>
              </div>
              <div className="d-none d-md-block"></div>
            </Col>

            {/* Right Side Form Panel */}
            <Col md={7} className="p-4 p-md-5 d-flex flex-column justify-content-center bg-white">
              <div>
                <h3 className="fw-bold text-dark mb-1" style={{ letterSpacing: '-0.5px' }}>Create New Account</h3>
                <p className="text-muted small mb-0">Please enter your credentials below</p>
              </div>
              
              <Form onSubmit={handleSubmit(onSignUpSubmit)} className="mt-4">
                {/* Full Name Field */}
                <Form.Group className="mb-3" controlId="formFullName">
                  <Form.Label className="small fw-semibold text-secondary mb-1">Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Amit Sharma" className="py-2 px-3 rounded-3" isInvalid={!!errors.fullName} {...register("fullName", { required: "Full name is required" })} />
                  <Form.Control.Feedback type="invalid" className="small">
                    {errors.fullName?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Email Address Field */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="small fw-semibold text-secondary mb-1">Email Address</Form.Label>
                  <Form.Control type="email" placeholder="name@domain.com" className="py-2 px-3 rounded-3" isInvalid={!!errors.email} {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })} />
                  <Form.Control.Feedback type="invalid" className="small">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label className="small fw-semibold text-secondary mb-1">Password</Form.Label>
                  <Form.Control type="password" placeholder="••••••••" className="py-2 px-3 rounded-3" isInvalid={!!errors.password} {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum length should be 6 characters" } })} />
                  <Form.Control.Feedback type="invalid" className="small">
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Submit Button */}
                <Button type="submit" className="w-100 py-2 rounded-3 fw-bold border-0" style={{ backgroundColor: '#FE480B', color: '#fff' }}>
                  Sign Up
                </Button>

                {/* Footer Link */}
                <div className="text-center mt-4">
                  <span className="text-muted small">Already have an account? </span>
                  <a href="/" className="small fw-bold text-decoration-none" style={{ color: '#FE480B' }}>
                    Sign In Here
                  </a>
                </div>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default SignUp;
