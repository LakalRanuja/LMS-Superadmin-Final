import {httpPost} from "../../../configs/httpServices";
import {loginURL} from "../../../configs/urlConfig";
import {loginActionType} from "../../actionType/actionType";

// ** login

export const loginAction = data => {
    return httpPost({
        url: loginURL,
        actionTypes: loginActionType,
        data
    })
}
