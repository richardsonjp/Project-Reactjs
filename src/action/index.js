export const parsing = (username) =>{
    return{
            type: 'showdisplay',
            payload: username
    }
}

export const statlogin = (loginstat) =>{
    return{
        type: 'loginstatus',
        payload: loginstat
    }
}