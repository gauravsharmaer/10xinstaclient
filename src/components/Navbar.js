
import React,{useContext} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { usercontext } from '../App'
const Navbar = () => {
  const {state,dispatch}=useContext(usercontext)
  const  navigate=useNavigate()
  const renderList=()=>{
    if(state){
      return (
        <>
        <li><Link to="/profile" className='line'>Profile</Link></li>
        <li><Link to="/CreatePost" className='line'>  <i className="material-icons">camera_alt</i></Link></li>
        <li>
        <button className="btn waves-effect waves-light #b71c1c red darken-4"   onClick={() => {localStorage.clear()
         dispatch({type:"CLEAR"})
         navigate("/login")
          }}>LOGOUT
   
   
  </button>
        </li>
        </>
      )
    }else{
      return(
        <>
        <li><Link to="/login " className='line'>Login</Link></li>
        <li><Link to="/signup" className='line'>Signup</Link></li>
        </>
      )
    }
  }
  return (
    <nav>
    <div className="nav-wrapper white" >
      <Link to={state ? "/":"/login"} className="brand-logo left">
        <img src="https://res.cloudinary.com/dhcnacghe/image/upload/v1677324169/e726c4e8-e25a-4ce8-aa28-43988988f11d_egkryr.png" alt='pic' /><span className='tag'>Instaclone</span>
      </Link>
      <ul id="nav-mobile" className="right ">
        {renderList()}
       
      </ul>
    </div>
  </nav>
        
  )
}

export default Navbar