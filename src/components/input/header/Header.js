import { NavLink } from "react-router-dom";
import { useToken } from "../../../context/TokenContext";

const Header = () => {
  const [token,setTokenInLocalStorage] = useToken();
  const logout = () => {
    setTokenInLocalStorage(null);
    localStorage.removeItem('token');
  }
  return(
    <header>
      <nav>
        {!token && <NavLink to="/login">login</NavLink> }
        {!token && <NavLink to="/register">Register</NavLink> }
        {token && <button onClick={logout} >Logout</button> }

      </nav>
    </header>
  )

}

export default Header;