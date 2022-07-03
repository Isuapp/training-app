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

const Login = ({move})=>{
    
    const navigate = useNavigate()
    // LLamamos a la variable  token para manejarla
    const [,setTokenInLocalStorage] = useToken();
    const [,setAdminInLocalStorage] = useAdmin()

    // LLamamos a las variables que usaremoms para actualizar los datos
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Llamamos a las variables que usaremos para recibir feedback del backend.
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e)=>{
        e.preventDefault();
        // Actualizamos loading a true para deshabilitar el botón.
        setLoading(true);
        setError(null);

        try {
            
            const data = await loginService({email, password});
            const user = jwt(data);
            
            if(user.role==='admin'){
                setAdminInLocalStorage(data)
                navigate('/trainings');
            }else{
                setTokenInLocalStorage(data)
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
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Input
                    label='password'
                    type='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <div>
                    <span className='text-link' onClick={move}>not registered? Register!</span>
                    <button disabled={loading} >
                        {!loading && 'login'}
                        {loading && 'cargando..'}
                    </button>

                </div>
            </form>
            {/* Dependiendo de su error o message son verdadero falsos, lanzaremos un mensaje que viene desde el backend */}
            {error && <p className="error">{error}</p>}
        </article>
    )
}

export default Login;