import React from 'react'
import { Button } from 'reactstrap'
import {useDispatch} from 'react-redux'
import {setTableRowDetails} from '../store/actions/index'
import { Eye } from 'react-feather'

const RowData = ({title = "", description = "", school = "", file = null}) => {
      const dispatch = useDispatch()
      const obj = { title,  description, school, file}
     return (
          <tr >
               <td  style = {{fontSize : '12px'}} scope="row">{title}</td>
               <td style = {{fontSize : '12px'}}>{description}</td>
               <td style = {{fontSize : '12px'}}>{school}</td>
               <td style = {{fontSize : '12px'}}><Eye/></td>
               {/* <td  style = {{fontSize : '12px'}} ><Button 
                         onClick= {() => dispatch(setTableRowDetails(obj)) } 
                         size="sm" 
                         outline 
                         color="primary">
                         edit
                         </Button></td> */}
        </tr>
     )
}

export default RowData
