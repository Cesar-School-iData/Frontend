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
            <div className='justify-left py-2 px-4'>
                <Button className="text-white font-semibold bg-black hover:bg-slate-600 px-7 py-1 rounded-full" onClick={handleOpen}>Entrar</Button>
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
                                id="outlined-password-input"
                                label="Senha"
                                type="password"
                                autoComplete="current-password"
                            />
                        </div>
                        <header>
                            <div className='px-28'>
                                <Button className='rounded text-white font-semibold bg-black hover:bg-slate-600 py-2 px-5' onClick={handleClose}>entrar</Button>
                            </div>
                        </header>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}