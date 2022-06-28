// IMportamos los manejadores que usaremos.
import { useState } from "react";
import { useToken } from "../context/TokenContext";

// Importamos el componente personalizado que hemos creado.
import Input from "../components/input/Input";

// Importamos el componente Navigate que nos redireccionará dónde le indiquemos
import { Navigate } from "react-router-dom";

const Login = ()=>{
    // LLamamos a la variable  token para manejarla
    const [token,setTokenInLocalStorage] = useToken();

    // LLamamos a las variables que usaremoms para actualizar los datos
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Llamamos a las variables que usaremos para recibir feedback del backend.
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);


    const handleLogin = async (e)=>{
        e.preventDefault();
        // Actualizamos loading a true para deshabilitar el botón.
        setLoading(true);

        try {

            const res = await fetch('http://localhost:4000/login',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const body = await res.json();


            if(body.status==='error'){
                // Recogemos del body el error y lo actualuzamos en la variable error para enseñarla como mensaje
                setError(body.message)
            }else{
                // Actualizmos el token con nuestro useToken
                setTokenInLocalStorage(body.data.token);
                // Mandamos mensaje de que todo ha ido bien
                setMessage(body.message)
            }

        } catch (error) {
            console.error(error)
            setError(error.message)
        } finally{
            setLoading(false)
        }
    }

    // Redireccionamos a la pagina principal, si hay token.
    if(token) return <Navigate to='/home' />

    return(
        <main>
            <h2>Login</h2>
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
                <button disabled={loading} >
                    {!loading && 'login'}
                    {loading && 'cargando..'}
                </button>
            </form>
            {/* Dependiendo de su error o message son verdadero falsos, lanzaremos un mensaje que viene desde el backend */}
            {error && <p className="error">{error}</p>}
            {message && <p className="success">{message}</p>}
        </main>
    )
}

export default Login;