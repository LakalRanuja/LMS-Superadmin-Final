import {schoolSaveActionType, schoolUpdateActionType} from "../../actionType/actionType"

const initialState = {
    userData: {},
    schoolSuccess: null,
    schoolLoading: false,
    schoolFailed: null
}

const schoolReducer = (state = initialState, action) => {
    console.log('------------------////------------------')
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                userData: action.data
            }

        case schoolSaveActionType.SUCCESS_ACTION:
            console.log('-----------------------------')
            return {
                ...state,
                schoolSuccess: action.value,
                schoolFailed: null,
                schoolLoading: false
            }

        case schoolSaveActionType.REQUEST_ACTION:
            console.log('-------------/-/-/-/-/-/-/-/-/-/-')
            return {
                ...state,
                schoolSuccess: null,
                schoolFailed: null,
                schoolLoading: true
            }

        case schoolSaveActionType.FAILED_ACTION:
            console.log('-------------======================+=====+++-')
            return {
                ...state,
                schoolSuccess: null,
                schoolFailed: action.value,
                schoolLoading: true
            }
        case schoolUpdateActionType.SUCCESS_ACTION:
            console.log('-----------------------------')
            return {
                ...state,
                schoolSuccess: action.value,
                schoolFailed: null,
                schoolLoading: false
            }

        case schoolUpdateActionType.REQUEST_ACTION:
            console.log('-------------/-/-/-/-/-/-/-/-/-/-')
            return {
                ...state,
                schoolSuccess: null,
                schoolFailed: null,
                schoolLoading: true
            }

        case schoolUpdateActionType.FAILED_ACTION:
            console.log('-------------======================+=====+++-')
            return {
                ...state,
                schoolSuccess: null,
                schoolFailed: action.value,
                schoolLoading: true
            }

        default:
            return state
    }
}

export default schoolReducer
