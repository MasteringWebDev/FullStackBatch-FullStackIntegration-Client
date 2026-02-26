import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, deleteUser } from '../store/actions/user'

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Users({ setEditUser }) {
  const users = useSelector((store) => store.user.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

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
              <Button variant="light" size="sm" className='ms-1'
                onClick={() => setEditUser(user)}
              >🖋️</Button>
              <Button variant="danger" size="sm" className='ms-1'
                onClick={() => dispatch(deleteUser(user._id))}
              >🗑️</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Users;