import {Axios} from './Axios';
function Login(payload){
    return Axios.post('/signin',payload);
}
export const loginServices = {
    Login
};