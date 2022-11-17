import React, { useEffect, useState } from "react"
import { IProblema, IAdm } from "./type"
import useAPI from "./inicialize"

export const ResultContext = React.createContext<any>({});

function ResultProvider(props: any) {
    const [problems, setProblems] = useState<IProblema[]>([]);
    const [adm, setAdm] = useState<IAdm[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const api = useAPI();

    const response: any = {
        problems,
        adm,
        loading,
        setLoading,
        setProblems,
        setAdm,
    }
    return (
        <ResultContext.Provider value={response}>
            {props.children}
        </ResultContext.Provider>
    )
}
export default ResultProvider;