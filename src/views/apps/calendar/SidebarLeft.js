// ** React Imports
import { Fragment, useState } from 'react'

// ** Custom Components
import classnames from 'classnames'
import { CardBody, Button, CustomInput, Input} from 'reactstrap'
import { Calendar } from 'react-feather'
import Select, { components } from 'react-select'

import { selectThemeColors, isObjEmpty } from '@utils'

// ** illustration import
import illustration from '@src/assets/images/pages/calendar-illustration.png'

  // ** States
// const [value, setValue] = useState([{ value: 'Ananda College', label: 'Ananda College'}])

// ** Filters Checkbox Array
const filters = [
  { label: 'A', color: 'danger', className: 'custom-control-danger mb-1' },
  { label: 'B', color: 'primary', className: 'custom-control-primary mb-1' },
  { label: 'C', color: 'warning', className: 'custom-control-warning mb-1' },
  { label: 'D', color: 'success', className: 'custom-control-success mb-1' },
  { label: 'E', color: 'info', className: 'custom-control-info' }
]

const schools = [
  { label: 'Ananda College', value: 'Ananda College'},
  { label: 'Royal College', value: 'Royal College'},
  { label: 'Mahanama College', value: 'Mahanama College'},
  { label: 'Nalanda College', value: 'Nalanda College'},
  { label: 'Isipathana College', value: 'Isipathana College'}
]

const grades = [
  { label: '1', value: '1'},
  { label: '2', value: '2'},
  { label: '3', value: '3'},
  { label: '4', value: '4'},
  { label: '5', value: '5'},
  { label: '6', value: '6'},
  { label: '7', value: '7'},
  { label: '8', value: '8'},
  { label: '9', value: '9'},
  { label: '10', value: '10'},
  { label: '11', value: '11'},
  { label: '12', value: '12'},
  { label: '13', value: '13'}
]

const SchoolComponent = ({ data, ...props }) => {
  return (
    <components.Option {...props}>
      <span className={`bullet bullet-${data.color} bullet-sm mr-50`}></span>
      {data.label}
    </components.Option>
  )
}

const GradeComponent = ({ data, ...props }) => {
  return (
    <components.Option {...props}>
      <span className={`bullet bullet-${data.color} bullet-sm mr-50`}></span>
      {data.label}
    </components.Option>
  )
}

const SidebarLeft = props => {
  // ** Props
  const { handleAddEventSidebar, toggleSidebar, updateFilter, updateAllFilters, store, dispatch } = props
  const [toggle, settoggle] = useState(false)
  // ** Function to handle Add Event Click

  const [toggleNew, settoggleNew] = useState(false)
  
  const handleAddEventClick = () => {
    toggleSidebar(false)
    handleAddEventSidebar()
  }

  return (
    <Fragment>
      <hr/>
      <h5 className='section-label mb-1'>
            <span className='align-middle' style={{position: 'relative', left: 20}}>Schools</span>
          </h5>
      <div className='sidebar-wrapper'>
        <Select 
          id='label'
          title='Search' 
          placeholder='Search' 
          // value={value}
          options={schools}
          theme={selectThemeColors}
          className='react-select'
          classNamePrefix='select'
          isClearable={false}
          onMenuOpen={() => settoggleNew(true)}
          onMenuClose={() => settoggleNew(false)}
          components={{
            Option: SchoolComponent
          }}
        />

          {toggleNew ? null : <div> 
            <h5 className='section-label mb-1' style={{position: 'relative', left: 20, marginTop: 10}}>
            <span className='align-middle'>Grades</span>
          </h5>
            <Select 
          id='label'
          title='Search' 
          // placeholder='Grades' 
          // value={value}
          options={grades}
          theme={selectThemeColors}
          className='react-select'
          classNamePrefix='select'
          isClearable={false}
          onMenuOpen={() => settoggle(true)}
          onMenuClose={() => settoggle(false)}
          components={{
            Option: GradeComponent
          }}
        />
{toggle ? null : <CardBody>
<h5 className='section-label mb-1'>
  <span className='align-middle'>Filter</span>
</h5>
<CustomInput
  type='checkbox'
  className='mb-1'
  label='View All'
  id='view-all'
  checked={store.selectedCalendars.length === filters.length}
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
          checked={store.selectedCalendars.includes(filter.label)}
          className={classnames({
            [filter.className]: filter.className
          })}
          onChange={e => dispatch(updateFilter(filter.label))}
        />
      )
    })}
</div>
</CardBody>} 
        </div>
          }
     
        {/* ------------------------------------------------------------------ */}
      </div>
      <div className='mt-auto'>
        <img className='img-fluid' src={illustration} alt='illustration' />
      </div>
    </Fragment>
  )
}

export default SidebarLeft
