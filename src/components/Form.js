import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { alpha } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from './Input';
import Label from './Label';

const Form = () => {
    const nameRef= React.useRef(null);
    const emailRef = React.useRef(null);
    const messageRef = React.useRef(null);
    const [status, setStatus] = React.useState('mounted') // 'submitting | error | success | mounted'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting')

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }

        let response = await fetch("http://localhost:4000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(data),
        });

        let result = await response.json();

        if (result.status) {
            setStatus('success');
            return;
        }

        setStatus('success')
    }

    console.log(status)

    return (
        <Box
            component="form"
            sx={{
                paddingRight: '2rem'
            }}
            noValidate
            autoComplete="off"
            type="submit"
            onSubmit={handleSubmit}
        >
            {(status == 'mounted') ? (
                <>
                    <FormControl variant="standard" sx={{ width: '100%' }}>
                        <Label name='nombre'>
                            Nombre (*)
                        </Label>
                        <Input
                            id="nombre"
                            type='text'
                            name='name'
                            placeholder='Escribe tu nombre'
                            autoComplete='name'
                            inputRef={nameRef}
                            required={true}
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%' }}>
                        <Label name='email'>
                            Correo electrónico (*)
                        </Label>
                        <Input
                            id="email"
                            type='email'
                            name='email'
                            autoComplete='email'
                            placeholder='example@domain.com'
                            inputRef={emailRef}
                            required={true}
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%' }}>
                        <Label name='email'>
                            Mensaje (*)
                        </Label>
                        <Input
                            id="email"
                            name='message'
                            type='text'
                            placeholder='¡Buen día! Un gusto encontrarlos...'
                            rows={2}
                            multiline
                            inputRef={messageRef}
                            required={true}
                        />
                    </FormControl>
                    <Box marginTop='1rem'>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: 'capitalize',
                                backgroundColor: theme => `${theme.palette.primary.main} !important`,
                                fontWeight: 900,
                                '&:hover': {
                                    backgroundColor: theme => alpha(theme.palette.secondary.main, 0.7)
                                }
                            }}
                            type="submit"
                        >
                            Enviar
                        </Button>
                    </Box>
                </>
            ) : (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '20vh',
                    width: '100%'
                }}>
                    {(status == 'submitting') && (
                        <CircularProgress size={75} />
                    )}
                    {(status == 'success') && (
                        <Box sx={{
                            color: theme => theme.palette.secondary.main,
                            fontSize: '1.1rem'
                        }}>
                            ¡Genial! Hemos recibido su correo.
                            Estate atento para más notificaciones.
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    )
}

export default Form;
