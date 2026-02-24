import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Container } from 'react-bootstrap'

import Users from './components/Users'
import AddUser from './components/AddUser'

function App() {
  return (
    <Container className='mt-5'>
      <Users />
      <AddUser />
    </Container>
  )
}

export default App
