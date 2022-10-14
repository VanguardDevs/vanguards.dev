import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from './Input';
import Label from './Label';
import TextField from '@mui/material/TextField';

const Form = () => {
    return (
        <Box
            component="form"
            sx={{
                paddingRight: '2rem'
            }}
            noValidate
            autoComplete="off"
            type="submit"
        >
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
                >
                    Enviar
                </Button>
            </Box>
        </Box>
    )
}

export default Form;
