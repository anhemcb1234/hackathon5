import {Axios} from "./Axios";



function getSignIn(payload){
    return Axios.post('/api/auth/signin',payload);
}

export const loginService = {
    getSignIn
};