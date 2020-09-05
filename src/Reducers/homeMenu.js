import axios from 'axios'
import { BACKEND_URL } from "setting.js";

const menus = []
const getMenus = (state = menus, action) => {
    if (action.payload === "add_menyus") { return [...state, action.payload] }
    return state
}
const setMenyus = (payload) => ({ type: 'add_menyus', payload })

export const setMenuThunk = () => (dispatch) => {
    axios.get(BACKEND_URL + 'stand/admin/get_menus.php').then(response => {
        dispatch(setMenyus(response.data))
    }).catch(err => {
        alert(err)
    })
}
export default getMenus