import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Provider } from 'react-redux'
import store from './store'

import { Container } from 'react-bootstrap'

import Users from './components/Users'
import AddUser from './components/AddUser'
import LoginUser from './components/LoginUser'

function App() {
  const [editMode, setEditMode] = useState(false)
  const [editUser, setEditUser] = useState(null)

  useEffect(() => {
    setEditMode(Boolean(editUser))
  }, [editUser])

  function resetToNormalMode() {
    setEditMode(false)
    setEditUser(null)
  }

  return (
    <Provider store={store}>
      <Container className='mt-5'>
        <hr />
        <LoginUser />
        <hr />
        <Users 
          setEditUser={setEditUser}
        />
        <AddUser 
          editMode={editMode} 
          editUser={editUser}
          resetToNormalMode={resetToNormalMode}
        />
      </Container>
    </Provider>
  )
}

export default App
