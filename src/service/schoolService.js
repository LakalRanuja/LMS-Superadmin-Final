import {httpPost} from "../configs/httpServices"

export const saveSchool = async (data) => {
    return await httpPost({url:"api/v1/school/save", data})
}

export const deleteSchool = async (data) => {
    return await httpPost({url:"api/v1/school/deleteBySchoolId"})
}
