import {useState} from 'react';

const Login = ()=>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const changeHandler =(e)=>{
        e.preventDefault();
        setEmail(e.target.value);
        
    }
    localStorage.setItem(email,'email' );
    localStorage.setItem(password, 'password');

    return <div className="input-forms">
        <div className="form">
            <label>Email:</label>
            <input
            type='email'
            placeholder="email"
            value={email}
            onChange={changeHandler}
            />
        </div>
        <div className="form">
        <label>Password:</label>
            <input
            type='password'
            placeholder="password"
            value={password}
            onChange={changeHandler}
            />
        </div>
        <div className="form">
            <button type='submit'>Login</button>
        </div>
    </div>  
}
export default Login;