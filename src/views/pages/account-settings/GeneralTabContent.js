import {Fragment, useEffect, useState} from 'react'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form } from 'reactstrap'

import {adminUpdate} from "../../../service/settingService"

import { updateAdmin } from './store/action'
import {useDispatch, useSelector} from 'react-redux'
import settingAction, {adminUpdateAction} from './store/action/settingAction'
import { getToast } from '../../../configs/toastConfig'

const GeneralTabs = ({ data }) => {
  const { register, errors, handleSubmit, control, setValue, trigger } = useForm()

  const [avatar, setAvatar] = useState(data.avatar ? data.avatar : '')

  // ** Store Vars
  const dispatch = useDispatch()
  const updateSuccess = useSelector(state => state.setting.updateSuccess)
  const updateFailed = useSelector(state => state.setting.updateFailed)
  const updateLoading = useSelector(state => state.setting.updateLoading)

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  // const onSubmit = data => trigger()
  useEffect(() => {
      if (updateSuccess && updateSuccess !== null) {
        if (updateSuccess.code === 200) {
          getToast(updateSuccess)
        }
      } else if (updateFailed) {
        getToast(updateFailed)
      }
  }, [updateSuccess, updateFailed])

  const onSubmit =  (data) => {
  console.log(data)
    dispatch(adminUpdateAction(({
      superAdminId : 1,
      email : data.email,
      password : "1111",
      firstName : data.username,
      lastName : data.fullName,
      mobileNumber : data.contact,
      date : "2020-01-01",
      isActive : true
    })))
  }

  return (
    <Fragment>
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
          <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
        </Media>
      </Media>
      <Form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm='6'>
            <FormGroup>
              <Label for='username'>First name</Label>
              <Controller
                defaultValue={data.username}
                control={control}
                as={Input}
                id='username'
                name='username'
                placeholder='Username'
                innerRef={register({ required: true })}
                onChange={e => setValue('username', e.target.value)}
                className={classnames({
                  'is-invalid': errors.username
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='name'>Last name</Label>
              <Controller
                defaultValue={data.fullName}
                control={control}
                as={Input}
                id='name'
                name='fullName'
                placeholder='Name'
                innerRef={register({ required: true })}
                onChange={e => setValue('fullName', e.target.value)}
                className={classnames({
                  'is-invalid': errors.fullName
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='email'>E-mail</Label>
              <Controller
                defaultValue={data.email}
                control={control}
                as={Input}
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                innerRef={register({ required: true })}
                onChange={e => setValue('email', e.target.value)}
                className={classnames({
                  'is-invalid': errors.email
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='company'>Contact</Label>
              <Controller
                defaultValue={data.contact}
                control={control}
                as={Input}
                id='company'
                name='company'
                placeholder='Company Name'
                innerRef={register({ required: true })}
                onChange={e => setValue('contact', e.target.value)}
                className={classnames({
                  'is-invalid': errors.contact
                })}
              />
            </FormGroup>
          </Col>
          {/* <Col className='mt-75' sm='12'>
            <Alert className='mb-50' color='warning'>
              <h4 className='alert-heading'>Your email is not confirmed. Please check your inbox.</h4>
              <div className='alert-body'>
                <a href='/' className='alert-link' onClick={e => e.preventDefault()}>
                  Resend confirmation
                </a>
              </div>
            </Alert>
          </Col> */}
          <Col className='mt-2' sm='12'>
            <Button.Ripple type='submit' className='mr-1' color='primary'>
              Save changes
            </Button.Ripple>
            <Button.Ripple color='secondary' outline>
              Cancel
            </Button.Ripple>
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}

export default GeneralTabs
