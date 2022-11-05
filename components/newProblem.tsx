import React from 'react'

function newProblem() {
    const qrcode = (event: React.MouseEvent<HTMLButtonElement>) => {
        window.open("https://forms.gle/o4rcFTQMQRQNa6Ur6")
    };
    return (
        <button className="text-white bg-black px-7 py-1 rounded-full" onClick={qrcode}>Reportar novo problema</button>
    )
}

export default newProblem