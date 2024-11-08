import React, { useState } from 'react'


const Login = ({handleLogin}) => {
 

 
    const SubmitHandler =(e)=>{
        e.preventDefault()
        handleLogin(email,password)
         setEmail("");
         setPassword("");
   }
    const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  return (
    <div className='flex items-center justify-center h-screen w-screen'> 
    <div className='border-2 rounded-lg border-emerald-600 p-20 '>
        <form  onSubmit={(e)=>{
            SubmitHandler(e)
        }} className='flex flex-col items-center justify-center' > 
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)}
            }
            required className='text-white outline-none bg-transparent border-2 py-4  px-4 border-emerald-600 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your Email' />
            <input value={password}
            onChange={(e)=>{
                  setPassword(e.target.value)
            }} required className='text-white outline-none bg-transparent border-2 py-4  px-4 mt-3 border-emerald-600 rounded-full placeholder:text-gray-400' type='password' placeholder='Enter your Password'/>
          <button type='submit' className='text-white border-none outline-none bg-transparent border-2 py-4  px-4  mt-9  bg-emerald-600 rounded-full'>Log in</button>
         </form>

    </div>
    </div>
  )
}

export default Login