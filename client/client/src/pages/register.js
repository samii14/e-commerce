import React from 'react'
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-redux'
import {useDispatch, useSelector} from 'react-redux'
import {RegisterUser} from './redux/slices/userSlice';

const register = () => {
  const {isAuth} = userSelector((state)=>state.user)
  const navigate= useNavigate()
  useEffect(()=>{
    if(isAuth){
      navigate("/")
    }
  },[isAuth])
  const {register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => 
   {
    dispatch(RegisterUser(data))
   } 
   console.log(data);
  console.log(errors);
    
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("Name", {})}/>        
        <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}/>  
        <input type="password" placeholder="Password" {...register("Password", {required: true,pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/>i})}/>  

        <input type="submit" />




      </form>
    </div>
  )
}

export default register
