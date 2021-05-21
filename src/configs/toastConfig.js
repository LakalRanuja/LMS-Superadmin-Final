import {toast} from "react-toastify"
import './toast.css'

const basicToastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    Transition: "zoom"
}


export const getToast = (obj) => {
    if (typeof obj === 'object' && obj.code && obj.code === 200) {
        return toast.success(obj.result, basicToastConfig)
    } else if (typeof obj === 'object' && obj.code && obj.code > 200 && obj.code < 300) {
        return toast.info(obj.result, basicToastConfig)
    } else if (typeof obj === 'object' && obj.code && obj.code > 400) {
        return toast.error(obj.result, basicToastConfig)
    }
}
