export const profileReducer = (state = false, action) => {
    switch(action.type){
        case'SWITCH_TOGGLE':
        return !state
        default:return state
    }
}