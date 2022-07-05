import './login.css'

// IMportamos los manejadores que usaremos.
import { useState } from "react";
import { useToken } from "../../context/TokenContext";
import { useAdmin } from '../../context/adminContext';

// Importamos el componente personalizado que hemos creado.
import Input from "../input/Input";

// Importamos el componente Navigate que nos redireccionará dónde le indiquemos
import { useNavigate } from "react-router-dom";
import { loginService } from '../../services';

import jwt from 'jwt-decode'
import Button from '../button/Button';

const LoginContainer = ({move})=>{
    
    const navigate = useNavigate()
    // LLamamos a la variable  token para manejarla
    const [token,setToken] = useToken();
    const [admin,setAdmin] = useAdmin()

    // LLamamos a las variables que usaremoms para actualizar los datos
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Llamamos a las variables que usaremos para recibir feedback del backend.
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [active, setActive] = useState(false);

    const handleLogin = async (e)=>{
        e.preventDefault();
        // Actualizamos loading a true para deshabilitar el botón.
        setLoading(true);
        setError(null);

        try {
            
            const data = await loginService({email, password});
            const user = jwt(data);
            
            if(user.role==='admin'){
                setAdmin(data)
                console.log('token admin:', admin)
                navigate('/trainings');
            }else{
                setToken(data)
                console.log('token user:', token)
                navigate('/trainings');
            }

        } catch (error) {
            setError(error.message)
        } finally{
            setLoading(false)
        }
    }
    
    // Redireccionamos a la pagina principal, si hay token.

    return(
        <article className='login-wraper'>
            <h2>LOGIN</h2>
            <form onSubmit={handleLogin} >
                <Input
                    label='email'
                    type='email'
                    value={email}
                    // Al escribir en el input usamos el manejador para actualizarl la variable correspondiente
                    onChange={(e)=>{setEmail(e.target.value);
                                    if (e.target.value !== '') setActive(true)
                                    else setActive(false)}}
                    active={active}
                />
                <Input
                    label='password'
                    type='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)
                        if (e.target.value !== '') setActive(true)
                        else setActive(false)}}
                        active={active}
                    />
                <div>
                    <Button
                        name={loading ? 'loading..': 'login'}
                        disabled={loading}
                    />
                    <span className='text-link' onClick={move}>not registered? Register!</span>

                </div>
            </form>
            {/* Dependiendo de su error o message son verdadero falsos, lanzaremos un mensaje que viene desde el backend */}
            {error && <p className="error">{error}</p>}
        </article>
    )
}

export default LoginContainer;