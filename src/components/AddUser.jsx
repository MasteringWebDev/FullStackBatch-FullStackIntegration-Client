import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function AddUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const API_URL = import.meta.env.VITE_API_URL

  async function addUser() {
    try {
      const newUser = {
        name,
        email,
        age
      }
      const res = await axios.post(`${API_URL}/users`, newUser)
      alert(res.data.message)
    } catch(error) {
      console.log('Error while creating user', error)
    }
  }

  return (
    <div className='mt-5'>
      <h1 className='display-6'>Add User</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter your age"
            value={age} 
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Button variant="dark" type="button" onClick={addUser}>
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddUser;