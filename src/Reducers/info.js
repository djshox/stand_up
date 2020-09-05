import axios from 'axios'
import { BACKEND_URL } from "setting.js";


let info = []
const getInfo = (state = info, action) => {
    if (action.type === 'add_obj') {
        state = action.payload
        info = action.payload
    }
    return state;
}
const setInfo = (payload) => ({ type: 'add_obj', payload })

export const getInfoThunk = (id) => (dispatch) => {
    axios.get(BACKEND_URL + `stand/admin/api/content/read_childs.php?parent=${id}`).then(response => {
        dispatch(setInfo(response.data.records))
        console.log("response", response.data)
    }).catch(err => {
        console.log(1111)
        dispatch(setInfo([]))
        console.log(err)
    })
}
export default getInfo;