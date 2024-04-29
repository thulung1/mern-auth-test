import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../url";
import { UserContext } from '../context/userContext'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const {username, setUsername} = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await axios.post(`${BASE_URL}/api/v1/user/logout`, {withCredentials: true});
    setUsername(null)
    // navigate("/")
  };

  return (
    <div>
      <Link to={"/"}>Home</Link>
      {!username && (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </>
      )}
      {username && (
        <>
          <Link to={"/"}>
            <button onClick={()=>handleLogout}>Logout</button>
          </Link>
        </>
      )}
    </div>
  );
}
