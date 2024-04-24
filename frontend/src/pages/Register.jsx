import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../url";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleRegister = async () => {
    const res = await axios.post(`${BASE_URL}/api/v1/user/register`, {
      username,
      email,
      password,
    });
    if (res.data) {
      navigate('/login');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        placeholder="username"
      />
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
