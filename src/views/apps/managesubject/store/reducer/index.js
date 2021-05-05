
import {TOGGLE_NAV_BETWEEN_CONTENT_LESSON, SET_TABLE_ROW_DETAILS, RESET_TABLE_ROW_DETAILS} from '../actionTypes/manageSubjectTypes'
// ** Initial State
const initialState = {
  tasks: [],
  selectedTask: {},
  params: {
    filter: '',
    q: '',
    sort: '',
    tag: ''
  },
  selectedCalendars: ['Ananda College', 'Royal College', 'Mahanama College', 'Ds.Senanayake College', 'Isipathana College', 'Lumbini College', 'Sen.Sebastian College', 'Sen.Johns College'],
  toggleNavClasses : true,
  rowDataObject : {title : "", description : "", file : null}
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV_BETWEEN_CONTENT_LESSON:
      return { ...state, toggleNavClasses : action.task }

    case SET_TABLE_ROW_DETAILS:
        return { ...state, rowDataObject : action.task } 
    
    case RESET_TABLE_ROW_DETAILS:
      return { ...state, rowDataObject : {title : "", description : "", file : null} }     


    case 'GET_TASKS':
      return { ...state, tasks: action.tasks, params: action.params }
    case 'UPDATE_TASKS':
      return { ...state }
    case 'REORDER_TASKS':
      return { ...state, tasks: action.tasks }
    case 'SELECT_TASK':
      return { ...state, selectedTask: action.task }
// updated
      case 'UPDATE_FILTERS':
        // ** Updates Filters based on action filter
        const filterIndex = state.selectedCalendars.findIndex(i => i === action.filter)
        if (state.selectedCalendars.includes(action.filter)) {
          state.selectedCalendars.splice(filterIndex, 1)
        } else {
          state.selectedCalendars.push(action.filter)
        }
        if (state.selectedCalendars.length === 0) {
          state.events.length = 0
        }
        return { ...state }
     // updated
      case 'UPDATE_ALL_FILTERS':
        // ** Updates All Filters based on action value
        const value = action.value
        let selected = []
        if (value === true) {
          selected = ['Ananda College', 'Royal College', 'Mahanama College', 'Ds.Senanayake College', 'Isipathana College', 'Lumbini College', 'Sen.Sebastian College', 'Sen.Johns College']
        } else {
          selected = []
        }
        return { ...state, selectedCalendars: selected }

    default:
      return state
  }
}
export default TodoReducer
