import {httpPost} from "../configs/httpServices"
import {baseUrl, loginURL, changePasswordURL} from "../configs/urlConfig"

export const login = async (data) => {
    return await httpPost({url:baseUrl + loginURL, data})
}

export const changePassword = async (data) => {
    return await httpPost({url:baseUrl + changePasswordURL, data})
}
