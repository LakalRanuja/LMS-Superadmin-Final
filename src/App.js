// ** Router Import
import Router from './router/Router'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const App = props => {
    return (
        <div>
            <ToastContainer/>
            <Router/>
        </div>
    )
}

export default App
