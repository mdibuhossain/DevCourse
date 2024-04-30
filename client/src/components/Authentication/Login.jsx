import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { Link } from "react-router-dom";

function Login() {
  const { login, authLoading } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    login(payload);
  };

  return (
    <Container className="my-5">
      <h3 className="text-center">Please Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p>
          Dont't have an account? <Link to="/register">Register</Link>
        </p>
        <Button variant="primary" type="submit">
          {
            authLoading ?
              <div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div> : 'Sign in'
          }
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
