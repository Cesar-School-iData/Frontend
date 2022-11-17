import { useCallback, useContext, useEffect, useState } from 'react';
import { ResultContext } from './context';
import useAPI from './inicialize';

function Question() {
    const context = useContext(ResultContext);
    const api = useAPI();
    const [test, setTest] = useState<any>({});

    const fetchQuestions = useCallback(async () => {
        let problems;
        try {
            problems = await api.getProblema();
            context.setQuestions(problems.problems);
        } catch (error) {
            console.log("ERROR", error);
        }
        return problems;
    }, [context.problems]);

    useEffect(() => {
        fetchQuestions();
    }, []);

    if (!test.id) {
        setTest(context.administrador[2]);
    }

    return (
        <div className="">
            <h3>{test.andar}</h3>
        </div>
    );
}
export default Question;