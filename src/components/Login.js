import React, { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { Button, Card, Form, Alert } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase-cofig';


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value).then(async(result) => {
        localStorage.setItem('userId', result.user.uid);

        const docRef = doc(db, "users", result.user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          if (docSnap.data()?.isAdmin) {
            navigate("/Adashboard");
          } else {
            navigate("/dashboard");
          }
        } else {
        //   doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
    } catch {
      setError('Failed to Log In')
    }
    setLoading(false)
  }

  return (
    <div className="login-surface">
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card className="h-100 w-100">
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required placeholder="Enter your email" />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required placeholder="Enter your password" />
              </Form.Group>
              <Button disabled={loading} className="btn btn-primary mt-3" type="submit"> Log In</Button>
            </Form>
          </Card.Body>
          <div className="text-center justify-content-center d-flex list-unstyled">
            Need an account?<Link to={"/SignUp"}><li> SignUp</li></Link>
          </div>

        </Card>

      </div>
    </Container>
    </div>
  );
}