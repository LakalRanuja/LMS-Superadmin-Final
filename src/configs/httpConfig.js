import {baseUrl, refreshTokenUrl} from "../configs/urlConfig"
import axios from "axios"
import {useHistory} from "react-router-dom"
// import { setNavigation } from "../actions/navActions"
// import { NAV_TYPES } from "../configurations/appData"

const timeout = 25000

//use to get the request headers and other axios configurations
export const getConfigurations = async (httpMethod, url, data, isAuth, isFormData, givenTimeout) => {
    console.log('getConfigurations')
    let headers = {
        Accept: 'application/json',
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json'
    }

    if (isAuth) {
        headers = {
            ...headers,
            Authorization: Bearer + await localStorage.getItem('token')
        }
    }

    return {
        headers,
        data,
        url,
        baseURL: baseUrl,
        timeout: givenTimeout ? givenTimeout : timeout,
        method: httpMethod
    }
}

//use to get the refresh token
const getRefreshToken = async () => {

    const configurations = await getConfigurations('post', refreshTokenUrl, null, true, null)
    configurations.headers['isRefreshToken'] = 'true'

    try {
        const res = await axios(configurations)
        if (res && res.data && res.data.code === '200') {
            return res.data.result
        }
    } catch (error) {
    }
    return null
}

export const handleDispatch = (dispatch, actionType, data) => {
    dispatch({
        type: actionType,
        value: data
    })
}

export const userLogout = async () => {
    await localStorage.removeItem('token')
    await localStorage.removeItem('user_id')
    await localStorage.removeItem('current_ui')
    await localStorage.clear()
}

//use to handle the errors like timeout, session expirations and token refresh parts
export const handleErrors = async (error, dispatch, actionTypes, previousRequest) => {

    if (error.code === 'ECONNABORTED') {
        handleDispatch(dispatch, actionTypes.FAILED_ACTION, {code: 500, result: 'Request Timeout!'})
    } else if (error.response.status === 401) {
        const refreshToken = await getRefreshToken()

        if (refreshToken) {
            await localStorage.setItem('token', refreshToken)
            console.log('refresh token setup done, calling to previous method again...')
            return dispatch(previousRequest.forceRequest())

        } else {
            await userLogout(dispatch)
            handleDispatch(dispatch, signInActionType.SESSION_EXPIRED_ACTION, {code: 500, result: 'Session Expired!'})
        }

    } else {
        handleDispatch(dispatch, actionTypes.FAILED_ACTION, {code: 500, result: 'Internal Server Error'})
    }
}

