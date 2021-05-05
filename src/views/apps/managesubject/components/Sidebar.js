// ** React Imports
import { Link, useParams } from 'react-router-dom'
import {toggleNavBeeetweenSubject_Content, resetTableRowDetails} from '../store/actions/index'
import { useState, Fragment } from 'react'

import { updateAllFilters } from '../../calendar/store/actions'
import './styles/check.css'

import { useSelector } from 'react-redux'
// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Button, ListGroup, ListGroupItem, FormGroup, Label, CardBody, CustomInput, Input} from 'reactstrap'
import { Mail, Star, Check, Trash, Plus, Folder, FolderPlus } from 'react-feather'
import Select, { components } from 'react-select'

import { isObjEmpty, selectThemeColors } from '@utils'
// import Input from 'react-select/src/components/input'

const TodoSidebar = props => {
  const [sort, setSort] = useState('')
  const [query, setQuery] = useState('')
  // ** Props
  const { handleTaskSidebar, setMainSidebar, mainSidebar, updateAllFilters, updateFilter, dispatch, getTasks, params, store} = props
  const state = useSelector(state => state.manageSubjectContent)
  const newStore = useSelector(state => state.calendar)

  const filters = [
    { label: 'Ananda College', color: 'danger', className: 'custom-control-primary mb-1 mr-1' },
    { label: 'Royal College', color: 'danger', className: 'custom-control-primary mb-1 mr-1' },
    { label: 'Mahanama College', color: 'danger', className: 'custom-control-primary mb-1 mr-1' },
    { label: 'Ds.Senanayake College', color: 'warning', className: 'custom-control-primary mb-1 mr-1' },
    { label: 'Isipathana College', color: 'warning', className: 'custom-control-primary mb-1 mr-1' },
    { label: 'Lumbini College', color: 'warning', className: 'custom-control-primary mb-1 mr-1' },
    { label: 'Sen.Sebastian College', color: 'primary', className: 'custom-control-primary mb-1 mr-1' },
    { label: 'Sen.Johns College', color: 'primary', className: 'custom-control-primary mb-1 mr-1' }
  ]
  const selectedCalendars = useSelector(state => state.manageSubjectContent.selectedCalendars)

  const [title, setTitle] = useState(''),
      [tags, setTags] = useState([])

  const tagOptions = [
    { value: 'Ananda College ', label: 'Ananda College '},
    { value: 'DS.Senanayake College', label: 'DS.Senanayake College'},
    { value: 'Isipathana College', label: 'Isipathana College'},
    { value: 'Royal College', label: 'Royal College'},
    { value: 'Mahanama College', label: 'Mahanama College'},
    { value: 'Sen.Sebastian College', label: 'Sen.Sebastian College'}
  ]

  return (
    <div
      className={classnames('sidebar-left', {
        show: mainSidebar === true
      })}
    >
      <div className='sidebar'>
        <div className='sidebar-content todo-sidebar'>
          <div className='todo-app-menu'>
            <div className='add-task'>
              {/* <Button.Ripple color='primary' onClick={handleAddClick} block>
                Add Tasks
              </Button.Ripple> */}
            </div>
            <PerfectScrollbar className='sidebar-menu-list' options={{ wheelPropagation: false }}>
              <ListGroup tag='div' className='list-group-filters'>
              <ListGroupItem
                  action
                  // tag={Link}
                  // to={'/apps/notification/view'}
                  // active={state.toggleNavClasses}
                  onClick={() => {
                    dispatch(toggleNavBeeetweenSubject_Content(true))
                    dispatch(resetTableRowDetails())
                  }}
                >
                  {/* <Folder className='mr-75' size={18} />
                  <span className='align-middle'>Manage Lessons</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={'/apps/managesubjects/view/content'}
                  active={ !state.toggleNavClasses}
                  onClick={() => {
                    dispatch(toggleNavBeeetweenSubject_Content(false))
                    dispatch(resetTableRowDetails())
                  }}
                  action
                > */}

            <FormGroup>
              <Label className='form-label' for='task-tags'>
                Schools
              </Label>
              <Input
              style={{pointer: 'curser'}}
                // isMulti
                id='task-tags'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                placeholder='search'
                // options={tagOptions}
                theme={selectThemeColors}
                // value={tags}
                // onChange={data => {
                //   setTags(data !== null ? [...data] : [])
                // }}
              />              
            </FormGroup>

                {/* <CardBody>
                  <h5 className='section-label mb-1'>
                    <span className='align-middle'>Filter</span>
                  </h5>
                  <CustomInput
                      type='checkbox'
                      className='mb-1'
                      label='Select All'
                      id='view-all'
                      // checked={selectedCalendars.length === filters.length}
                      checked={selectedCalendars.length === filters.length}
                      onChange={e => dispatch(updateAllFilters(e.target.checked))}
                    />
                  <div className='calendar-events-filter'>
                  {filters.length &&
                        filters.map(filter => {
                          return (
                            <CustomInput
                              type='checkbox'
                              key={filter.label}
                              id={filter.label}
                              label={filter.label}
                              checked={selectedCalendars.includes(filter.label)}
                              className={classnames({
                                [filter.className]: filter.className
                              })}
                              onChange={e => dispatch(updateFilter(filter.label))}
                            />
                          )
                        })}
                  </div>
                </CardBody> */}

                <form>
                <input type="checkbox" id="fruit1" name="fruit-1" value="Apple" />
                  <label for="fruit1" style={{fontSize: 13.5, fontWeight: 'bolder'}}>Select All</label>
                  <input type="checkbox" id="fruit0" name="fruit-0" value="guava" />
                  <label for="fruit0" style={{fontSize: 13}}>Ananda College</label>
                  <input type="checkbox" id="fruit2" name="fruit-2" value="Banana" />
                  <label for="fruit2" style={{fontSize: 13}}>Royal College</label>
                  <input type="checkbox" id="fruit3" name="fruit-3" value="Cherry" />
                  <label for="fruit3" style={{fontSize: 13}}>Isipathana College</label>
                  <input type="checkbox" id="fruit4" name="fruit-4" value="Strawberry" />
                  <label for="fruit4" style={{fontSize: 13}}>Mahanama College</label>
                  <input type="checkbox" id="fruit5" name="fruit-5" value="stunt" />
                  <label for="fruit5" style={{fontSize: 13}}>Sen.Sebastian College</label>
                  <input type="checkbox" id="fruit6" name="fruit-6" value="mango" />
                  <label for="fruit6" style={{fontSize: 13}}>Sen.Johns College</label>
                </form>

                  {/* <FolderPlus className='mr-75' size={18} />
                  <span className='align-middle'>Manage Contents</span> */}
                </ListGroupItem>
               
              </ListGroup>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoSidebar
