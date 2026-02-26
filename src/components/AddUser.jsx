import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux'
import { addUser, updateUser } from '../store/actions/user'

function AddUser({ editMode, editUser, resetToNormalMode }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if(editUser) {
      setName(editUser.name)
      setAge(editUser.age)
    }
  }, [editUser])

  async function add() {
    const newUser = {
      name,
      email,
      age
    }
    dispatch(addUser(newUser))
    reset()
  }

  async function update() {
    const existingUser = {
      _id: editUser._id,
      name,
      age
    }
    dispatch(updateUser(existingUser))
    reset()
    resetToNormalMode()
  }

  function reset() {
    setName('')
    setEmail('')
    setAge('')
  }

  return (
    <div className='mt-5'>
      <h1 className='display-6'>
        { !editMode ? 'Add' : 'Edit'} User
      </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
         { !editMode && (
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        )}
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter your age"
            value={age} 
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Button variant="dark" type="button" 
          onClick={() => !editMode ? add() : update()}
        >
          { !editMode ? 'Add' : 'Update' }
        </Button>
      </Form>
    </div>
  );
}

export default AddUser;