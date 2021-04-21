import { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'
import Avatar from '@components/avatar'
import htmlToDraft from 'html-to-draftjs'
import { selectThemeColors } from '@utils'
import { Editor } from 'react-draft-wysiwyg'
import Breadcrumbs from '@components/breadcrumbs'
import { EditorState, ContentState } from 'draft-js'

// import { DataGrid } from '@material-ui/data-grid'

import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Media,
  Form,
  Label,
  Input,
  FormGroup,
  CustomInput,
  Button
} from 'reactstrap'

import '@styles/react/libs/editor/editor.scss'
import '@styles/base/plugins/forms/form-quill-editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/base/pages/page-blog.scss'

const BlogEdit = () => {
  const initialContent = `
  <p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p>
  <p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>
  `

  const contentBlock = htmlToDraft(initialContent)
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
  const editorState = EditorState.createWithContent(contentState)

  const [data, setData] = useState(null),
    [title, setTitle] = useState(''),
    [slug, setSlug] = useState(''),
    [status, setStatus] = useState(''),
    [content, setContent] = useState(editorState),
    [blogCategories, setBlogCategories] = useState([]),
    [featuredImg, setFeaturedImg] = useState(null),
    [imgPath, setImgPath] = useState('banner.jpg')

  useEffect(() => {
    axios.get('/blog/list/data/edit').then(res => {
      setData(res.data)
      setTitle(res.data.blogTitle)
      setSlug(res.data.slug)
      setBlogCategories(res.data.blogCategories)
      setFeaturedImg(res.data.featuredImage)
      setStatus(res.data.status)
    })
  }, [])

  const categories = [
    { value: 'fashion', label: 'Fashion' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'quote', label: 'Quote' },
    { value: 'video', label: 'Video' },
    { value: 'food', label: 'Food' }
  ]

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    setImgPath(files[0].name)
    reader.onload = function () {
      setFeaturedImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  return (
    <div className='blog-edit-wrapper'>
      <Breadcrumbs
        breadCrumbTitle='Add Grades'
        breadCrumbParent='Pages'
        breadCrumbParent2='Grade Management'
        breadCrumbActive='Add'
      />
      {data !== null ? (
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                
                <Form className='mt-2' onSubmit={e => e.preventDefault()}>
                  <Row>
                    <Col md='6'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-title'>ID</Label>
                        <Input id='blog-edit-title' isClearable={false  } value={title} onChange={e => setTitle(e.target.value)} />
                      </FormGroup>
                    </Col>
                    
                    <Col md='6'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-slug'>Grades</Label>
                        <Input id='blog-edit-slug' onChange={e => setSlug(e.target.value)} />
                      </FormGroup>
                    </Col>
                    
                    <Col className='mt-50'>
                      <Button.Ripple color='primary' className='mr-1'>
                        Save
                      </Button.Ripple>
                      <Button.Ripple color='danger' outline>
                        Cancel
                      </Button.Ripple>
                    </Col>
                    {/* <!-- Editable table --> */}
<div class="card col-7" style={{position: 'realative', right: 200}}>
  <div class="card-body">
    <div id="table" class="table-editable">
      <span class="table-add float-right mb-3 mr-2"
        ><a href="#!" class="text-success"
          ><i class="fas fa-plus fa-2x" aria-hidden="true"></i></a
      ></span>
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <thead>
          <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Grade</th>
            {/* <th class="text-center">Company Name</th>
            <th class="text-center">Country</th>
            <th class="text-center">City</th>
            <th class="text-center">Sort</th>
            <th class="text-center">Remove</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="pt-3-half" contenteditable="true">G01001x</td>
            <td class="pt-3-half" contenteditable="true">1,2,3,4,5,6,7,8,9,10,11</td>
            {/* <td class="pt-3-half" contenteditable="true">Deepends</td>
            <td class="pt-3-half" contenteditable="true">Spain</td>
            <td class="pt-3-half" contenteditable="true">Madrid</td>
            <td class="pt-3-half">
              <span class="table-up"
                ><a href="#!" class="indigo-text"
                  ><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a
              ></span>
              <span class="table-down"
                ><a href="#!" class="indigo-text"
                  ><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a
              ></span>
            </td> */}
            {/* <td>
              <span class="table-remove"
                ><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
                  Remove
                </button></span
              >
            </td> */}
          </tr>
          {/* <!-- This is our clonable table line --> */}
          <tr>
          <td class="pt-3-half" contenteditable="true">G01002</td>
            <td class="pt-3-half" contenteditable="true">1,2,3,4,5,6,7,8,9,10,11,12,13</td>
            {/* <td class="pt-3-half" contenteditable="true">Insectus</td>
            <td class="pt-3-half" contenteditable="true">USA</td>
            <td class="pt-3-half" contenteditable="true">San Francisco</td>
            <td class="pt-3-half">
              <span class="table-up"
                ><a href="#!" class="indigo-text"
                  ><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a
              ></span>
              <span class="table-down"
                ><a href="#!" class="indigo-text"
                  ><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a
              ></span>
            </td>
            <td>
              <span class="table-remove"
                ><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
                  Remove
                </button></span
              >
            </td> */}
          </tr>
          {/* <!-- This is our clonable table line --> */}
          <tr>
          <td class="pt-3-half" contenteditable="true">G01003</td>
            <td class="pt-3-half" contenteditable="true">1,2,3,4,5,6,7,8,9,10,11</td>
            {/* <td class="pt-3-half" contenteditable="true">Isotronic</td>
            <td class="pt-3-half" contenteditable="true">Germany</td>
            <td class="pt-3-half" contenteditable="true">Frankfurt am Main</td>
            <td class="pt-3-half">
              <span class="table-up"
                ><a href="#!" class="indigo-text"
                  ><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a
              ></span>
              <span class="table-down"
                ><a href="#!" class="indigo-text"
                  ><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a
              ></span>
            </td>
            <td>
              <span class="table-remove"
                ><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
                  Remove
                </button></span
              >
            </td> */}
          </tr>
          {/* <!-- This is our clonable table line --> */}
          <tr class="hide">
          <td class="pt-3-half" contenteditable="true">G01004</td>
            <td class="pt-3-half" contenteditable="true">1,2,3,4,5,6,7,8,9,10,11,12,13</td>
            {/* <td class="pt-3-half" contenteditable="true">Portica</td>
            <td class="pt-3-half" contenteditable="true">United Kingdom</td>
            <td class="pt-3-half" contenteditable="true">London</td>
            <td class="pt-3-half">
              <span class="table-up"
                ><a href="#!" class="indigo-text"
                  ><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a
              ></span>
              <span class="table-down"
                ><a href="#!" class="indigo-text"
                  ><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a
              ></span>
            </td>
            <td>
              <span class="table-remove"
                ><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
                  Remove
                </button></span
              >
            </td> */}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
{/* <!-- Editable table --> */}
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : null}
    </div>
  )
}

export default BlogEdit
