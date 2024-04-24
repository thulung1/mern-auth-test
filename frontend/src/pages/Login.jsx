import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../url";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const {setUsername} = useContext(UserContext)

  const handleLogin = async () => {
    const res = await axios.post(`${BASE_URL}/api/v1/user/login`, {
      email,
      password,
    },{withCredentials: true});
    if(res.data){
      setUsername(res.data)
      navigate('/')
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
