import {Axios} from './Axios';
function Login(payload){
    return Axios.post('/auth/signin',payload);
}
export const loginServices = {
    Login
};