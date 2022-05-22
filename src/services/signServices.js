import {Axios} from './Axios';
function SignUp(payload){
    return Axios.post('/api/auth/signup',payload);
}
export const signServices = {
    SignUp
};