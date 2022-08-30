import React, { useRef, useState } from "react";
import "./App.css";
import { Button, Card, Form, Alert } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase-cofig'
import { useAuth } from '../contexts/AuthContext'

function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [username, setUname] = useState('')
  const navigate = useNavigate()

  const setUsername = async() => {
        await setDoc(doc(db, "users", localStorage.getItem('userId')), {
          username
        });
      }
  
  
  async function handleSubmit(e) {
        e.preventDefault()
    
        if(passwordRef.current.value !==
         passwordConfirmRef.current.value){
            return setError('Passwords do not match')
          }
          
          try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value).then((result) => {
                        localStorage.setItem('userId', result.user.uid);
                        setUsername().then((result) => {
                          navigate("/dashboard");
                        }).catch((e) => {
                          setError(e)
                        });
            })
          } catch {
            setError('Failed to create an account')
          }
          setLoading(false)
  }

  return(
    <div className="login-surface">
      <Container className="d-flex align-items-center justify-content-center" 
        style={{minHeight: "80vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}>
          <Card className="h-100 w-100" >
            <Card.Body>
              <h2 className="text-center mb-4">SignUp</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
              <Form.Group id="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" onChange={(e)=> {setUname(e.target.value)}} required placeholder="Enter your username"/>
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required placeholder="Enter your email"/>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required placeholder="Enter your password"/>
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmRef} required placeholder="Confirm Password"/>
                </Form.Group>
                <Button disabled={loading} className="btn btn-primary mt-3" type="submit"> Sign Up</Button>
              </Form>
            </Card.Body>

            <div className="text-center d-flex justify-content-center list-unstyled">
              Already have an account?<Link to={"/Login"}><li>Login</li></Link>
            </div>

          </Card>

        </div>
      </Container>
      </div>
  );

}

export default SignUp
