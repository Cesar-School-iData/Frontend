import axios from "axios";

function use() {
    const requester = axios.create({
        baseURL: 'https://localhost:8080',
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST',
        }
    });

    const getUnidade = async (): Promise<any> => {
        const { data } = await requester.get('/unidade');
        return data;
    }

    const getAmbiente = async (): Promise<any> => {
        const { data } = await requester.get('/ambiente');
        return data;
    }

    const getProblema = async (): Promise<any> => {
        const { data } = await requester.get('/problema');
        return data;
    }

    const getReport = async (): Promise<any> => {
        const { data } = await requester.get('/reportar');
        return data;
    }

    const getAdm = async (): Promise<any> => {
        const { data } = await requester.get('/adm');
        return data;
    }

    return { getUnidade, getAmbiente, getProblema, getReport, getAdm };
}
export default use;