import {Axios} from './Axios';
function Login(payload){
    return Axios.post('/api/auth/signin',payload);
}
export const loginServices = {
    Login
};