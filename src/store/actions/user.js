import axios from 'axios'

export const USERS_LOADING = 'USERS_LOADING'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const USERS_FAILED = 'USERS_FAILED'

export const setUsersLoading = () => ({
  type: USERS_LOADING
})

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
})

export const setUsersFailed = (errorMessage) => ({
  type: USERS_FAILED,
  payload: errorMessage
})

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(setUsersLoading())
      const res = await axios.get('http://localhost:4000/users')
      dispatch(fetchUsersSuccess(res.data.data))
    } catch(error) {
      dispatch(setUsersFailed(error.message))
    }
  }
}

export const addUser = (newUser) => {
  return async (dispatch) => {
    try {
      dispatch(setUsersLoading())
      await axios.post('http://localhost:4000/users', newUser)
      dispatch(fetchUsers())
    } catch(error) {
      dispatch(setUsersFailed(error.message))
    }
  }
}

export const updateUser = (existingUser) => {
  return async (dispatch) => {
    try {
      dispatch(setUsersLoading())
      await axios.patch(`http://localhost:4000/users/${existingUser._id}`,      existingUser, 
        { headers: { token: localStorage.getItem('token') } })
      dispatch(fetchUsers())
    } catch(error) {
      alert(error.message)
      dispatch(setUsersFailed(error.message))
    }
  }
}

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(setUsersLoading())
      await axios.delete(`http://localhost:4000/users/${userId}`, 
        { headers: { token: localStorage.getItem('token') } })
      dispatch(fetchUsers())
    } catch(error) {
      alert(error.message)
      dispatch(setUsersFailed(error.message))
    }
  }
}