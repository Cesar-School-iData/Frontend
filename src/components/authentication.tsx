import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className='flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-7 text-gray-400'>
                <button onClick={handleOpen}>
                    <img className='voteButtons hover:text-blue-400' src="https://img.icons8.com/sf-regular/48/null/up.png" />
                </button>
                <p className='text-xs font-bold text-black'>0</p>
            </div>
            <Modal
                open={open}
            >
                <Box sx={style}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '35ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Observação"
                                InputProps={{
                                    readOnly: false,
                                }}
                            />
                        </div>
                        <header>
                            <div className='px-28'>
                                <Button className='rounded text-white font-semibold bg-black hover:bg-slate-600 py-2 px-5' onClick={handleClose}>enviar</Button>
                            </div>
                        </header>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}