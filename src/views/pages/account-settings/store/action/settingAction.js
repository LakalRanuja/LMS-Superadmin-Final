import {adminUpdateActionType} from "../../../../../redux/actionType/actionType"
import {adminUpdateURL} from "../../../../../configs/urlConfig"
import {httpPost} from "../../../../../configs/httpServices"
import axios from "axios"

export const adminUpdateAction2 = (data) => {
    return httpPost({
        url: adminUpdateURL,
        actionTypes: adminUpdateActionType,
        data
    })
}

// updateAdmin
export const adminUpdateAction = (data) => {
    // return async (dispatch, getState) => {
    // alert(typeof data)

    console.log("adminUpdateAction")
    console.log(data)
    return httpPost({
        url: adminUpdateURL,
        actionTypes: adminUpdateActionType,
        data
    })

    // axios.post('http://localhost:8080/api/v1/superAdmin/update')
    //     .then(response => {
    //         // handle success
    //         alert(response)
    //         console.log(response)
    //     })

    // axios.post("http://localhost:8080/api/v1/superAdmin/update", data)
    //         //     .then(response => {
    //         //         alert("done")
    //         //        if (response.data.code) {
    //         //             useDispatch({
    //         //                type: adminUpdateActionType.SUCCESS_ACTION,
    //         //                data
    //         //            })
    //         //        }
    //         //     }).catch(err =>  alert("error"))
    // }
    // alert(data)
}
