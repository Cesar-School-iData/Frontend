import React from 'react'

function newProblem() {
    const qrcode = (event: React.MouseEvent<HTMLButtonElement>) => {
        window.open("https://forms.gle/o4rcFTQMQRQNa6Ur6")
    };
    return (
        <div className='flex justify-center px-9 sm:px-6 lg:px-8 mt-28'>
            <button className="text-white font-semibold bg-black hover:bg-slate-600 px-7 py-1 rounded-full" onClick={qrcode}>Reportar novo problema</button>
        </div>

    )
}

export default newProblem