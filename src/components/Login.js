import React, { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { Button, Card, Form, Alert } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom";


export default function Login(){
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

      try {
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value).then((result) => {
          localStorage.setItem('userId', result.user.uid);
        })
        navigate("/dashboard")
      }catch {
        setError('Failed to Log In')
      }
      setLoading(false)
  }

  return(
      <Container className="d-flex align-items-center justify-content-center" 
        style={{minHeight: "80vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}>
          <Card className="h-100 w-100">
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required placeholder="Enter your email"/>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required placeholder="Enter your password"/>
                </Form.Group>
                <Button disabled={loading} className="btn btn-primary mt-3"  type="submit"> Log In</Button>
              </Form>
            </Card.Body>
            <div className="text-center justify-content-center d-flex list-unstyled">
              Need an account?<Link to={"/SignUp"}><li> SignUp</li></Link>
            </div>
                   
          </Card>
                
        </div>
      </Container>
  );
}