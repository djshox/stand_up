import axios from 'axios'
import { BACKEND_URL } from "setting.js";

const sliders = []
const getSliders = (state = sliders, action) => {
    if (action.type === "add_sliders") {
        if (!state.length) return [...state, ...action.payload]
    }
    return state
}
const setSliders = (payload) => ({ type: 'add_sliders', payload })

export const setSlidersThunk = () => (dispatch) => {
    axios.get(BACKEND_URL + 'stand/admin/api/content/play_on_desktop.php').then(response => {
        dispatch(setSliders(response.data.records))
    }).catch(err => {
        alert(err)
    })
}
export default getSliders