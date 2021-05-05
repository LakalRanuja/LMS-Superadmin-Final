// ** React Imports
import { Fragment, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// ** Third Party Components
import classnames from 'classnames'

// ** Todo App Components
import Tasks from '../components/Tasks'
import Sidebar from '../components/Sidebar'
// import Card from '../../ui-elements/cards/advance/CardCongratulations'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getTasks, updateTask, selectTask, addTask, deleteTask, reOrderTasks } from '../store/actions/index'

// ** Styles
import '@styles/react/apps/app-todo.scss'

const Index = () => {
  // ** States
  const [sort, setSort] = useState('')
  const [query, setQuery] = useState('')
  const [mainSidebar, setMainSidebar] = useState(false)
  const [openTaskSidebar, setOpenTaskSidebar] = useState(false)

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.todo)

  // ** URL Params
  const paramsURL = useParams()
  const params = {
    filter: paramsURL.filter || '',
    q: query || '',
    sortBy: sort || '',
    tag: paramsURL.tag || ''
  }

  // ** Function to handle Left sidebar & Task sidebar
  const handleMainSidebar = () => setMainSidebar(!mainSidebar)
  const handleTaskSidebar = () => setOpenTaskSidebar(!openTaskSidebar)

  // ** Get Tasks on mount & based on dependency change
  // useEffect(() => {
  //   dispatch(
  //     getTasks({
  //       filter: paramsURL.filter || '',
  //       q: query || '',
  //       sortBy: sort || '',
  //       tag: paramsURL.tag || ''
  //     })
  //   )
  // }, [store.tasks.length, paramsURL.filter, paramsURL.tag, query, sort])

  return (
    // <Fragment>
    //   {/* <Card/> */}
    <Fragment>
      <Sidebar
        store={store}
        params={params}
        getTasks={getTasks}
        dispatch={dispatch}
        mainSidebar={mainSidebar}
        urlFilter={paramsURL.filter}
        setMainSidebar={setMainSidebar}
        handleTaskSidebar={handleTaskSidebar}
      />
      <div className='content-right'>
        <div className='content-wrapper'>
          <div className='content-body'>
            <div
              className={classnames('body-content-overlay', {
                show: mainSidebar === true
              })}
              onClick={handleMainSidebar}
            ></div>

            {store ? (
              <Tasks
                store={store}
                tasks={store.tasks}
                sort={sort}
                query={query}
                params={params}
                setSort={setSort}
                setQuery={setQuery}
                dispatch={dispatch}
                getTasks={getTasks}
                paramsURL={paramsURL}
                updateTask={updateTask}
                selectTask={selectTask}
                reOrderTasks={reOrderTasks}
                handleMainSidebar={handleMainSidebar}
                handleTaskSidebar={handleTaskSidebar}
              />
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
    // </Fragment>
  )
}

export default Index
