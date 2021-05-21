// ** React Import
import {useEffect, useState} from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input, Media } from 'reactstrap'

//
import avatar from '../../../../assets/images/avatars/avatar-blank.png'

// ** Store & Actions
import { addUser } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'
import { saveSchool } from "../../../../service/schoolService"
import { getToast } from '../../../../configs/toastConfig'
import { saveSchoolAction } from '../store/action/schoolAction'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState('subscriber')
  const [plan, setPlan] = useState('basic')

  // ** Store Vars
  const dispatch = useDispatch()
  const schoolSaveSuccess = useSelector(state => state.school.schoolSuccess)
  const schoolSaveFailed = useSelector(state => state.school.schoolFailed)
  const schoolSaveLoading = useSelector(state => state.school.schoolLoading)

  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  // ** UseEffector
  useEffect(() => {
    if (schoolSaveSuccess && schoolSaveSuccess !== null) {
      if (schoolSaveSuccess.code === 200) {
        alert('Done')
        getToast(schoolSaveSuccess)
      }
    } else if (schoolSaveFailed) {
      getToast(schoolSaveFailed)
    }
  }, [schoolSaveSuccess, schoolSaveFailed])


  // ** Function to handle form submit
  const onSubmit = (data) => {
    console.log('------------////////////////------------')
    console.log(data)
    console.log('------------////////////////------------')
    if (isObjEmpty(errors)) {
      toggleSidebar()

      dispatch(saveSchoolAction({
            schoolId: 3,
            schoolCode: "SDD",
            password: "1234",
            schoolName: "Mahinda College",
            fullName: "Anill Frenando",
            address: "No 12 , Galle",
            profilePic: "",
            isActive: true,
            createDate: '2021-01-01'
      })

      // dispatch(saveSchoolAction({
      //       fullName: data.fullName,
      //       company: data.company,
      //       // role,
      //       username: data.username,
      //       country: data.country,
      //       contact: data.contact,
      //       email: data.email,
      //       currentPlan: plan,
      //       status: 'active',
      //       avatar: ''
      //     })
      )
    }
  }

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New School'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Media>
        <Media className='mr-25' left>
          <Media object className='rounded mr-50' src={avatar} alt='Generic placeholder image' height='80' width='80' />
        </Media>
        <Media className='mt-75 ml-1' body>
          <Button.Ripple tag={Label} className='mr-75' size='sm' color='primary'>
            Upload
            <Input type='file' onChange={onChange} hidden accept='image/*' />
          </Button.Ripple>
          <Button.Ripple color='secondary' size='sm' outline>
            Reset
          </Button.Ripple>
          <p>Upload School Logo !</p>
        </Media>
      </Media>
      <Form onSubmit={handleSubmit(onSubmit)} style={{marginTop: 10}}>
        <FormGroup>
          <Label for='fullName'>
            School Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='fullName'
            id='fullName'
            placeholder='Ananda College Colombo'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['fullName'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='username'>
            Username <span className='text-danger'>*</span>
          </Label>
          <Input
            name='username'
            id='username'
            placeholder='anandaCollege'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['username'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='email'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='anandaCollege@gmail.com'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['email'] })}
          />
          <FormText color='muted'>You can use letters, numbers & periods</FormText>
        </FormGroup>
        <FormGroup>
          <Label for='company'>
            Principal Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='company'
            id='company'
            placeholder='Mr. Namal'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['company'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='country'>
            Address <span className='text-danger'>*</span>
          </Label>
          <Input
            name='country'
            id='country'
            placeholder='Colombo 05'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['country'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='contact'>
            Contact <span className='text-danger'>*</span>
          </Label>
          <Input
            name='contact'
            id='contact'
            placeholder='(397) 294-5153'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['contact'] })}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for='user-role'>User Role</Label>
          <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            <option value='subscriber'>Subscriber</option>
            <option value='editor'>Editor</option>
            <option value='maintainer'>Maintainer</option>
            <option value='author'>Author</option>
            <option value='admin'>Admin</option>
          </Input>
        </FormGroup> */}
        {/* <FormGroup className='mb-2' value={plan} onChange={e => setPlan(e.target.value)}>
          <Label for='select-plan'>Select Plan</Label>
          <Input type='select' id='select-plan' name='select-plan'>
            <option value='basic'>Basic</option>
            <option value='enterprise'>Enterprise</option>
            <option value='company'>Company</option>
            <option value='team'>Team</option>
          </Input>
        </FormGroup> */}
        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
