import { combineReducers } from 'redux'
import getMenus from './homeMenu'
import getSubMenus from './subMenus'
import getInfo from './info'
import getIsParent from './isParent'
import getSliders from './sliderReducer'
import getBirthDays from './birthDays'
const Store = combineReducers({ getMenus, getSubMenus, getInfo, getIsParent, getSliders, getBirthDays })

export default Store;