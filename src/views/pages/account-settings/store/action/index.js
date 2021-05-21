import axios from 'axios'

// ** Get User
export const getAdmin = id => {
  return async dispatch => {
    await axios
      .get('/pages/account-settings/admin', { id })
      .then(response => {
        dispatch({
          type: 'GET_ADMIN',
          selectedUser: response.data.user
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new user
export const updateAdmin = user => {
  return (dispatch, getState) => {
    axios
      .post('/pages/account-settings/update-admin', user)
      .then(response => {
        dispatch({
              type: 'UPDATE_ADMIN',
              user
        })
      })
      .then(() => {
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

// ** Delete user
export const deleteAdmin = id => {
  return (dispatch, getState) => {
    axios
      .delete('/pages/account-settings/delete', { id })
      .then(response => {
        dispatch({
          type: 'DELETE_ADMIN'
        })
      })
      .then(() => {
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      })
  }
}
