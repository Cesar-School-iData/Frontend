import http from "../api/inicialize2"
import { IUnidade, } from "../api/type"

const getAll = () => {
    return http.get<Array<IUnidade>>("/unidade");
};

const get = (id: any) => {
    return http.get<IUnidade>(`/unidade/${id}`);
};

const create = (data: IUnidade) => {
    return http.post<IUnidade>("/tutorials", data);
};

const update = (id: any, data: IUnidade) => {
    return http.put<any>(`/tutorials/${id}`, data);
};

const remove = (id: any) => {
    return http.delete<any>(`/tutorials/${id}`);
};

const removeAll = () => {
    return http.delete<any>(`/tutorials`);
};

const findByTitle = (title: string) => {
    return http.get<Array<IUnidade>>(`/tutorials?title=${title}`);
};

const TutorialService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
};

export default TutorialService;