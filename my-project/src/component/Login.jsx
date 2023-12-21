import React, { useState } from 'react'
import privateAxios from '../config/privateAxios'
import publicAxios from '../config/publicAxios'
import { useNavigate } from 'react-router-dom'

function login() {
    const [user, setUser] = useState({
    userName: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleGetValue = (e) => {setUser({...user, [e.target.name]: e.target.value})}

  const handleLogin = async () => {
    const response = await publicAxios.post('/login', user)
    localStorage.setItem('token', response.data.token)
    alert(response.data.message)
    navigate("/todos")
  }
  return (
    <div>
        <div className='bg-[#7e83ff] w-full h-screen'><br /><br /><br />
            <div className='w-[400px] h-[500px] rounded-xl m-auto bg-pink-300'><br /><br /><br />
                <h1 className='text-2xl text-black text-center'>Login</h1><br />
                <input type="text" placeholder="Username" className='drop-shadow-md w-[300px] h-[40px] rounded-xl px-4 mx-[12%]' onChange={handleGetValue} name='userName'/><br /><br />
                <input type="text" placeholder="Password" className='drop-shadow-md w-[300px] h-[40px] rounded-xl px-4 mx-[12%]' onChange={handleGetValue} name='password'/><br /><br />
                <button className='drop-shadow-md w-[300px] h-[40px] rounded-xl bg-black text-white mx-[12%]' onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default login