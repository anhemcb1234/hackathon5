import {Axios} from './Axios';
function SignUp(payload){
    return Axios.post('/signup',payload);
}
export const signServices = {
    SignUp
};