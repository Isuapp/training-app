// IMportamos los manejadores que vamos a usar
import { useState } from "react";
import { useToken } from "../context/TokenContext";

// Importamos el componente Navigate para redireccionarnos dónde queramos
import { Navigate } from "react-router-dom";

// Importamos el componente personalizado que hemos creado.
import Input from "../components/input/Input";


const Register = ()=>{
    // LLamamos a la variable  token para manejarla
    const [ token] = useToken();
    // LLamamos a las variables que usaremoms para actualizar los datos
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole ] = useState('')
    // Llamamos a las variables que usaremos para recibir feedback del backend.
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Actualizamos loading a true para deshabilitar el botón.
        setLoading(true)
        
        try {

            const res = await fetch('http://localhost:4000/register',{
                method:'POST',
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    role,
                }),
            })

            const body = await res.json();
        
            if(body.status==='error'){
                 // Recogemos del body el error y lo actualuzamos en la variable error para enseñarla como mensaje
                setError(body.message);
            }else{
                // Mandamos mensaje de que todo ha ido bien
                setMessage(body.message)
            } 

        } catch (error) {
            console.error(error);
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

      // Redireccionamos a login, si hay token.
    if (token) return <Navigate to='/login' />;

    return(
        <main>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} >
                <Input
                    type='text'
                    value={name}
                    name='name'
                    // Al escribir en el input usamos el manejador para actualizarl la variable correspondiente
                    onChange={(e)=> setName(e.target.value)}
                    label='name'
                />
                <Input
                    type='email'
                    value={email}
                    name='email'
                    onChange={(e)=> setEmail(e.target.value)}
                    label='email'
                />
                <Input
                    type='password'
                    value={password}
                    name='password'
                    onChange={(e)=> setPassword(e.target.value)}
                    label='password'
                />

                <Input
                    type='role'
                    value={role}
                    name='role'
                    onChange={(e)=> setRole(e.target.value)}
                    label='role'
                />
                <button disabled={loading}>registrarme </button>
            </form>
            {/* Dependiendo de su error o message son verdadero falsos, lanzaremos un mensaje que viene desde el backend */}
            {error && <p className="error">{error}</p>}
            {message && <p className="success">{message}</p>}
        </main>
    )
}

export default Register;