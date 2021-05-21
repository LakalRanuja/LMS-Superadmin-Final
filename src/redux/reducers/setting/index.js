import {adminUpdateActionType} from "../../actionType/actionType"

const initialState = {
    userData: {},
    updateSuccess: null,
    updateLoading: false,
    updateFailed: null
}

const settingReducer = (state = initialState, action) => {
    console.log('------------------////------------------')
    switch (action.type) {
        case 'UPDATE_ADMIN':
            return {
                ...state,
                userData: action.data
            }

        case adminUpdateActionType.SUCCESS_ACTION:
            console.log('-----------------------------')
            return {
                ...state,
                updateSuccess: action.value,
                updateFailed: null,
                updateLoading: false
            }

        case adminUpdateActionType.REQUEST_ACTION:
            console.log('-------------/-/-/-/-/-/-/-/-/-/-')
            return {
                ...state,
                updateSuccess: null,
                updateFailed: null,
                updateLoading: true
            }

        case adminUpdateActionType.FAILED_ACTION:
            console.log('-------------======================+=====+++-')
            return {
                ...state,
                updateSuccess: null,
                updateFailed: action.value,
                updateLoading: true
            }

        default:
            return state
    }
}

export default settingReducer
