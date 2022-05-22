import {Axios} from "./Axios";

function getAddStaff(payload){
    return Axios.post('/api/staff',payload);
}
function delUserById(id){
    return Axios.del(`/api/staff/${id}`);
}
function getAllStaff(){
    return Axios.get(`/api/staff`);
}
function getStaffById(id){
    return Axios.get(`/api/staff/${id}`);
}
function updateStaffById(payload){
    return Axios.post(`/api/staff/update`,payload);
}
export const homeService = {
    getAddStaff,
    delUserById,
    getAllStaff,
    getStaffById,
    updateStaffById
};