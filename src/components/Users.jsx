import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([])
  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetchUsers()
  }, [])
  
  async function fetchUsers() {
    try {
      const res = await axios.get(`${API_URL}/users`)
      setUsers(res.data.data)
    } catch(error) {
      console.log('Error while fetching users', error)
    }
  }

  return (
    <>
      <h1 className='display-3'>Users</h1>
      <ListGroup>
        {users.map((user, index) => (
          <ListGroup.Item 
            className="d-flex justify-content-between align-items-start"
            variant={user.age >= 18 ? "success" : "warning"}
            key={index}
          >
            <span>{user.name} | { user.email } | {user.age }</span>
            <div>
              <Button variant="light" size="sm" className='ms-1'>🖋️</Button>
              <Button variant="danger" size="sm" className='ms-1'>🗑️</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Users;