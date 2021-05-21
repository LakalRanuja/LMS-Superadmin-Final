import {schoolSaveActionType, schoolUpdateActionType} from "../../../../../redux/actionType/actionType"
import {saveSchoolURL, updateSchoolURL} from "../../../../../configs/urlConfig"
import {httpPost} from "../../../../../configs/httpServices"

// ** saveSchool
export const saveSchoolAction = (data) => {

    console.log("saveSchoolAction")
    console.log(data)
    return httpPost({
        url: saveSchoolURL,
        actionTypes: schoolSaveActionType,
        data
    })
}

// ** updateSchool
export const updateSchoolAction = (data) => {
    console.log("updateSchoolAction")
    console.log(data)
    return httpPost({
        url: updateSchoolURL,
        actionTypes: schoolUpdateActionType,
        data
    })
}
