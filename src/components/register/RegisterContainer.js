import './register.css';

// IMportamos los manejadores que vamos a usar
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useAdmin } from '../../context/adminContext';

// Importamos el componente Navigate para redireccionarnos dónde queramos
import { Link, useNavigate } from "react-router-dom";

// Importamos el componente personalizado que hemos creado.
import Input from "../input/Input";
import { registerService } from '../../services';
import Button from '../button/Button';


const RegisterContainer = ({move})=>{
    const navigate = useNavigate()
    // LLamamos a la variable  token para manejarla
    const [ user] = useUser();
    const [admin] =  useAdmin();
    // LLamamos a las variables que usaremoms para actualizar los datos
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [role, setRole ] = useState('normal')
    // Llamamos a las variables que usaremos para recibir feedback del backend.
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null)
    const [active, setActive] = useState(false);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Actualizamos loading a true para deshabilitar el botón.
        setLoading(true)

        if(password!==repeatPassword){
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const formData = new FormData();
            formData.append('name',name)
            formData.append('email',email)
            formData.append('password', password)
            formData.append('role', role)

            await registerService(formData)

            navigate('/login')
        } catch (error) {
            console.error(error);
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

      // Redireccionamos a login, si hay token.

    return(
        <article className='register-wraper'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} >
                <Input
                    type='text'
                    value={name}
                    name='name'
                    // Al escribir en el input usamos el manejador para actualizarl la variable correspondiente
                    onChange={(e)=> {setName(e.target.value)
                        if (e.target.value !== '') setActive(true)
                        else setActive(false)}}
                        active={active}
                    label='name'
                />
                <Input
                    type='email'
                    value={email}
                    name='email'
                    onChange={(e)=> {setEmail(e.target.value)
                        if (e.target.value !== '') setActive(true)
                        else setActive(false)}}
                        active={active}
                    label='email'
                />
                <Input
                    type='password'
                    value={password}
                    name='password'
                    onChange={(e)=> {setPassword(e.target.value)
                        if (e.target.value !== '') setActive(true)
                        else setActive(false)}}
                        active={active}
                    label='password'
                />
                <Input
                    type='password'
                    value={repeatPassword}
                    name='repeatPassword'
                    onChange={(e)=> {setRepeatPassword(e.target.value)
                        if (e.target.value !== '') setActive(true)
                        else setActive(false)}}
                        active={active}
                    label='repeatPassword'
                />
                <div>
                    <Button 
                        name={loading? 'loading..':'register'}
                        disabled={loading}
                    />
                    
                    <Link className='text-link' to='/login'>Already registered? Login!</Link>
                </div>
               
            </form>
            {/* Dependiendo de su error o message son verdadero falsos, lanzaremos un mensaje que viene desde el backend */}
            {error && <p className="error">{error}</p>}
            {message && <p className="success">{message}</p>}
        </article>
    )
}

export default RegisterContainer;