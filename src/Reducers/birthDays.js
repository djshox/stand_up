import axios from 'axios'
import { BACKEND_URL } from "setting.js";

const sliders = []
const getBirthDays = (state = sliders, action) => {
    if (action.type === "add_birthday") {
        if (!state.length) return [...state, ...action.payload]
    }
    return state
}
const setBirthDays = (payload) => ({ type: 'add_birthday', payload })

export const getBirthDaysThunk = () => (dispatch) => {
    axios.get(BACKEND_URL + 'stand/admin/api/content/birthdays.php').then(response => {

        dispatch(setBirthDays(response.data.records))
    }).catch(err => {
        alert(err)
    })
}
export default getBirthDays