import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../Reducer/UserReducer';
// const [state, dispatch] = useReducer(reducer, initialState)
// const initialState = {data{name : "",password:""}}
// function reducer(state, action) { 
// switch(state, action) {
//     case "loginuser" :
//         return {...State, data:action.payload}
//         default :
//         return state
// }
// }

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = () =>{
        const userData = {
            name : name,
            password : password
        }
        console.log(userData)
        // dispatch({type:"",payload:userData})
        dispatch(loginUser(userData))
    }

  return (
    <div className='user-container'>
        <h1>Login page</h1>
        <input
        type="text"
        placeholder='Enter the name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <input
        type='password'
        placeholder='Enter the Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button
        onClick={userLogin}>Login</button>
    </div>
  )
}

export default Login