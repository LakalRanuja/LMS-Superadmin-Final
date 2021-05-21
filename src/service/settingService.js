import {httpPost} from "../configs/httpServices"
import {baseUrl, adminUpdateURL} from "../configs/urlConfig"

export const adminUpdate = async (data) => {
    console.log(data)
    return await httpPost({url:adminUpdateURL, data})
}

export const adminUpdate2 =  (data) => {
    console.log(data)
    return { data}
}
