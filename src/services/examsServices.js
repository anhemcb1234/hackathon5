import {Axios} from './Axios';
function getExams(){
    return Axios.get('/api/category');
}
function getExamById(id){
    return Axios.get(`/api/category/${id}`);
}
function getQuestions(id){
    return Axios.get(`/api/question/getQuestionByExamId/${id}`);
}
function addQuestions(payload){
    return Axios.post(`/api/calculator/`,payload);
}
function getResult(idUser, idExam){
    return Axios.get(`/api/result/getResultByExamAndUser/${idUser}/${idExam}`);
}
function getAllResult(idUser){
    return Axios.get(`/api/result/getAllResultByUser/${idUser}`);
}
function getRanking(){
    return Axios.get(`/api/result/ranking`);
}

export const examsServices = {
    getExams,
    getExamById,
    getQuestions,
    addQuestions,
    getResult,
    getAllResult,
    getRanking
};