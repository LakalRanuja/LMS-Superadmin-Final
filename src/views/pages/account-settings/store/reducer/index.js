// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedAdmin: null
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return { ...state, allData: action.data }
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_ADMIN':
      return { ...state, selectedUser: action.selectedAdmin }
    case 'UPDATE_ADMIN':
      return { ...state }
    case 'DELETE_ADMIN':
      return { ...state }
    default:
      return { ...state }
  }
}
export default users
