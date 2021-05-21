import {getConfigurations, handleDispatch, handleErrors} from "./httpConfig"
import axios from 'axios'
import {baseUrl} from "../configs/urlConfig"

//http post request without tokens
export const httpPost = (requestConfig) => {

    console.log('httpPost')
    const url = requestConfig.url
    const actionTypes = requestConfig.actionTypes
    const data = requestConfig.data
    const isAuth = requestConfig.isAuth
    const isFormData = requestConfig.isFormData
    const timeout = requestConfig.timeout

    return async (dispatch) => {

        console.log('actionTypes')
        console.log(actionTypes)
        dispatch({type: actionTypes.REQUEST_ACTION})
        console.log('httpPost')
        const configurations = await getConfigurations('post', url, data, isAuth, isFormData, timeout)

        axios(configurations)
            .then((res) => {
                const result = res.data
                if (result && result.code) {
                    if (parseInt(result.code) >= 400) {
                        handleDispatch(dispatch, actionTypes.FAILED_ACTION, {
                            code: parseInt(result.code),
                            result: result.result
                        })
                    } else {
                        console.log("////////////////////////////////////////////////////////////")
                        handleDispatch(dispatch, actionTypes.SUCCESS_ACTION, {
                            code: parseInt(result.code),
                            result: result.result
                        })
                        console.log("////////////////////////////////////////////////////////////")
                    }
                } else {
                    handleDispatch(dispatch, actionTypes.SUCCESS_ACTION, null)
                }
            })
            .catch((error) => {
                console.log(error)
                handleErrors(error, dispatch, actionTypes, {forceRequest: () => httpPost(requestConfig)})
            })
    }
}


//http get requests without tokens
export const httpGet = (requestConfig) => {

    const url = requestConfig.url
    const actionTypes = requestConfig.actionTypes
    const isAuth = requestConfig.isAuth
    const isFormData = requestConfig.isFormData
    const timeout = requestConfig.timeout

    return async (dispatch) => {

        dispatch({type: actionTypes.REQUEST_ACTION})

        const configurations = await getConfigurations('get', url, null, isAuth, isFormData, timeout)

        axios(configurations)
            .then((res) => {
                const result = res.data
                if (result && result.code && parseInt(result.code) < 300) {
                    handleDispatch(dispatch, actionTypes.SUCCESS_ACTION, {
                        code: parseInt(result.code),
                        result: result.result
                    })
                } else {
                    handleDispatch(dispatch, actionTypes.FAILED_ACTION, {code: 500, result: result?.result})
                }
            })
            .catch((error) => {
                console.log(error)
                handleErrors(error, dispatch, actionTypes, {forceRequest: () => httpGet(requestConfig)})
            })
    }
}

//external API calls
// export const httpGetExternal = (requestConfig) => {
//
//     const url = requestConfig.url
//     const actionTypes = requestConfig.actionTypes
//
//     return async (dispatch) => {
//
//         dispatch({type: actionTypes.REQUEST_ACTION})
//
//         axios.get(url)
//             .then((res) => {
//                 const result = res.data
//                 if (result) {
//                     handleDispatch(dispatch, actionTypes.SUCCESS_ACTION, {code: 200, result: result})
//                 }
//             })
//             .catch((error) => {
//                 console.log(error)
//                 handleDispatch(dispatch, actionTypes.FAILED_ACTION, {code: 500, result: 'Internal Server Error'})
//             })
//     }
// }


// export const httpFetchGET = (requestConfig) => {
//
//   const url = requestConfig.url
//   const actionTypes = requestConfig.actionTypes
//   const isAuth = requestConfig.isAuth
//   const isFormData = requestConfig.isFormData
//
//   return async (dispatch) => {
//
//     dispatch({type: actionTypes.REQUEST_ACTION})
//
//     const configurations = await getConfigurations('GET', url, null, isAuth, isFormData)
//
//     fetch("http://103.125.216.56:8006/common/api/v1/getAllProducts", configurations)
//         .then((response) => response.json())
//         .then((responseJson) => {
//
//           const result = responseJson
//           console.log(responseJson.code)
//           console.log(result)
//
//           handleDispatch(dispatch, actionTypes.SUCCESS_ACTION, {
//             code: parseInt(result.code),
//             value: result.result
//           })
//         })
//         .catch((error) => {
//           handleDispatch({type: actionTypes.FAILED_ACTION, value: error})
//         })
//   }
// }
