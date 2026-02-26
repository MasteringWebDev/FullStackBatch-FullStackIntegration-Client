import { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Container } from 'react-bootstrap'

import Users from './components/Users'
import AddUser from './components/AddUser'

function App() {
  const [users, setUsers] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [editUser, setEditUser] = useState(null)
  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    setEditMode(Boolean(editUser))
  }, [editUser])

  function resetToNormalMode() {
    setEditMode(false)
    setEditUser(null)
  }
  
  async function fetchUsers() {
    try {
      const res = await axios.get(`${API_URL}/users`)
      setUsers(res.data.data)
    } catch(error) {
      console.log('Error while fetching users', error)
    }
  }

  async function deleteUser(userId) {
    try {
      const res = await axios.delete(`${API_URL}/users/${userId}`)
      alert(res.data.message)
      fetchUsers()
    } catch(error) {
      alert('Error while deleting user')
      console.log('Error while deleting user', error)
    }
  }

  return (
    <Container className='mt-5'>
      <Users 
        users={users} 
        setEditUser={setEditUser} 
        deleteUser={deleteUser}
      />
      <AddUser 
        fetchUsers={fetchUsers} 
        editMode={editMode} 
        editUser={editUser}
        resetToNormalMode={resetToNormalMode}
      />
    </Container>
  )
}

export default App
