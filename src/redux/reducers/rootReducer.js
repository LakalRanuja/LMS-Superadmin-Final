// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import setting from './setting'
import school from './school'
import chat from '@src/views/apps/chat/store/reducer'
import todo from '@src/views/apps/todo/store/reducer'
import users from '@src/views/apps/user/store/reducer'
// import email from '@src/views/apps/email/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'

import manageSubjectContent from '@src/views/apps/managesubject/store/reducer'

const rootReducer = combineReducers({
  auth,
  todo,
  chat,
  setting,
  school,
  // email,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  dataTables,
  manageSubjectContent
})

export default rootReducer
