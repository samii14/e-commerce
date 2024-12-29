import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
    
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>   
        <input type="email" placeholder="Email" {...register("Email", {required: true,})}/>  
        <input type="password" placeholder="Password" {...register("Password", {required: true,})}/>  

        <input type="submit" />




      </form>
    </div>
  )
}

export default Login
