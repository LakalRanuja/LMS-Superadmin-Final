import adminUpdateActionType from '../../../../../redux/actionType/actionType'

const initialState = {
    updateSuccess:null,
    updateLoading:false,
    updateFailed:null
}

export default (state = initialState, action) => {
    console.log("*************************************")
    switch (action.type){
        case adminUpdateActionType.SUCCESS_ACTION:
            console.log("adminUpdate.SUCCESS_ACTION")
            return {
                ...state,
                updateSuccess: action.value,
                updateFailed: null,
                updateLoading: false
            }

        case adminUpdateActionType.REQUEST_ACTION:
            console.log("adminUpdate.REQUEST_ACTION")
            console.log(action.value)
            return {
                ...state,
                updateSuccess: null,
                updateFailed: null,
                updateLoading: true
            }

        case adminUpdateActionType.FAILED_ACTION:
            console.log("adminUpdate.FAILED_ACTION")
            return {
                ...state,
                updateSuccess: null,
                updateFailed: action.value,
                updateLoading: true
            }

        default:
            return state;
    }
}
