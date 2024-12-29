import React from 'react'
import {Link} from 'reacr-router-dom'

const NavBar = () => {
    const {isAuth} = useSelector((state)=>state.user)
    const dispatch= useDispatch()
    return (
        <>
        <div>
{
    isAuth ? (<div><Link to={"/"}>Home</Link>
        <button onClick={()=> dispatch(logout())}>Logout</button>
       
         </div>
          ) :
    
    <div>
    <Link to={"/"}>Home</Link>
    <Link to={"/register"}>Register</Link>
    <Link to={"/login"}>Login</Link> 
    </div>
}

        </div>

        </>
  )
}
export default NavBar