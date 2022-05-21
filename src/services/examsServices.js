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
    return Axios.post(`/calculator/`,payload);
}
function getResult(idUser, idExam){
    return Axios.get(`/result/getResultByExamAndUser/${idUser}/${idExam}`);
}
function getAllResult(idUser){
    return Axios.get(`/result/getAllResultByUser/${idUser}`);
}
export const examsServices = {
    getExams,
    getExamById,
    getQuestions,
    addQuestions,
    getResult,
    getAllResult
};