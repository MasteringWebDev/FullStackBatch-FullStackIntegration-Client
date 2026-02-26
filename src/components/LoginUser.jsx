import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function LoginUser() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  async function login() {
    try {
      const userCreds = {
        email,
        password
      }
      const res = await axios.post(`http://localhost:4000/users/login`, userCreds)
      alert(res.data.message)
      localStorage.setItem('token', res.data.token)
      setLoggedIn(true)
    } catch(error) {
      alert('Something went wrong!')
      console.log('Something went wrong', error)
    }
  }

  if(loggedIn) {
    return (
      <h1>You are currently logged in</h1>
    )
  }

  return (
    <div className='mt-5'>
      <h1 className='display-6'>
        Login
      </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="dark" type="button" 
          onClick={login}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginUser;