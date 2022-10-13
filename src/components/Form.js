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
                '& > :not(style)': {
                    m: 1,
                },
            }}
            noValidate
            autoComplete="off"
            type="submit"
        >
            <FormControl variant="standard">
                <Label name='nombre'>
                    Nombre (*)
                </Label>
                <Input id="nombre" type='text' fullWidth />
            </FormControl>
            <FormControl variant="standard">
                <Label name='email'>
                    Correo (*)
                </Label>
                <Input id="email" type="email" fullWidth />
            </FormControl>
            <FormControl variant="standard">
                <Label name='message'>
                    Mensaje (*)
                </Label>
                <TextField id="email" multiline fullWidth />
            </FormControl>
            <Box>
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
