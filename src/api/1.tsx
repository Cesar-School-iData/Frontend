import React, { useEffect, useState } from 'react';

const App = () => {
    const [unidade, setUnidade] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('/unidade')
            .then(response => response.json())
            .then(data => {
                setUnidade(data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>JUG List</h2>
            {unidade.map(uni =>
                <div key={uni.id}>
                    {uni.nome_predio}
                </div>
            )}
        </div>
    );
}

export default App;