let isParent = {}
const getIsParent = (state = isParent, action) => {
    if (action.type === 'addIsParent') {
        state = action.payload
    }
    return state;
}
export const setIsParent = (payload) => ({ type: 'addIsParent', payload })
export default getIsParent;