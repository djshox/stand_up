import axios from 'axios'
import { BACKEND_URL } from "setting.js";

export const getData = {
    getHomeMenus() {
        return axios.get(BACKEND_URL + 'stand/admin/get_menus.php').then(response => {
            return response.data
        }).catch(err => {
            alert(err)
        })
    }
}