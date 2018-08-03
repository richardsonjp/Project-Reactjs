
const initialState = ''

export default (state = initialState,action) =>{
    switch(action.type){
        case 'loginstatus':
            return action.payload;

            default:
                return state
    }
}