import React, { useContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Input, FormLabel } from '@mui/material';
import AuthContext from '../context/auth/AuthContext';

export const Login = () => {
    const { login } = useContext(AuthContext);
    const [ formValues, setformValues ] = useState({});

    const handleChange = (e) => {
        setformValues((lastValues) => ({
            ...lastValues,
            [e.target.name]: e.target.value
        }));
    }

    const signIn = (e) => {
        e.preventDefault();
        login(formValues);
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ marginTop: 150 }}>
                    <form onSubmit={ (e) => signIn(e)} style={{ alignItems: 'center' }}>
                        <h1>Iniciar sesión</h1>
                        
                        <div style={{ marginTop: 50 }}>
                            <FormLabel htmlFor='email'>Correo electrónico</FormLabel>
                            <div>
                                <Input 
                                    id='email'
                                    name='email'
                                    placeholder="correo@correo.com"
                                    type='text'
                                    onChange={ (e) => handleChange(e) }
                                />
                            </div>
                        </div>

                        <div style={{ marginTop: 50 }}>
                            <FormLabel htmlFor='password'>Contraseña</FormLabel>
                            <div>
                                <Input 
                                    id='password'
                                    name='password'
                                    type='password'
                                    placeholder="miClave123" 
                                    onChange={ (e) => handleChange(e) }
                                />
                            </div>
                        </div>

                        <Button 
                            type='submit'
                            style={{ marginTop: 50 }}
                        >Ingresar</Button>
                    </form>
                </div>
            </Container>
        </>
    );
}