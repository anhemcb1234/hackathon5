import {Axios} from './Axios';
function getExams(){
    return Axios.get('/category');
}
function getExamById(id){
    return Axios.get(`/category/${id}`);
}
function getQuestions(id){
    return Axios.get(`/question/getQuestionByExamId/${id}`);
}
function addQuestions(payload){
    return Axios.post(`/question/add`,payload);
}
export const examsServices = {
    getExams,
    getExamById,
    getQuestions,
    addQuestions
};