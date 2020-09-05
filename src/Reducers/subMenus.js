import axios from 'axios'
import { BACKEND_URL } from "setting.js";

let subMenus = []
const getSubMenus = (state = subMenus, action) => {
    if (action.type === 'add_sub_menus') {
        state = action.payload
        subMenus = action.payload
    }
    if (action.type === 'filter_sub_menus') {
        if (action.payload === '0') return subMenus
        else state = subMenus;
        return state.filter(item => (item.type === action.payload))
    }
    if (action.type === 'add_slide') {
        state = [];
        state.push(action.payload)
        console.log("action.payload", state);

        return state
    }
    return state;
}
const setSubMenus = (payload) => ({ type: 'add_sub_menus', payload })
export const filterSubMenus = (payload) => ({ type: 'filter_sub_menus', payload })
export const addSlider = (payload) => ({ type: 'add_slide', payload })


export const getSubMenusThunk = (id) => (dispatch) => {
    axios.get(BACKEND_URL + `stand/admin/api/content/read_childs.php?parent=${id}`).then(response => {
        dispatch(setSubMenus(response.data.records))
    }).catch(err => {
        dispatch(setSubMenus([]))
        console.log(err)
    })
}
export default getSubMenus;