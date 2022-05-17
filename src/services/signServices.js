import {Axios} from './Axios';
function SignUp(payload){
    return Axios.post('/auth/signup',payload);
}
export const signServices = {
    SignUp
};