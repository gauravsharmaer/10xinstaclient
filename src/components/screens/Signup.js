import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import M from "materialize-css"
const Signup = () => {
const navigate=useNavigate()
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const PostData=()=>{
  if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
    M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
    return
  }
  fetch("/signup",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,
      password,
      email
    })
  }).then((res)=>res.json())
  .then((data)=>{
    if(data.error){
      M.toast({html: data.error,classes:"#c62828 red darken-3"})
    }
    else{
      M.toast({html: data.message,classes:"#76ff03 light-green accent-3"})
     navigate("/login")
    }
  })
  .catch((error)=>{
    console.log(error)
  })
}

  return (
    <div className="mycard">
    <div className="card auth-card input-field">
      <h2 className='tag'>Instaclone</h2>
      <input type="text" placeholder="name" value={name} onChange={(e)=>{
        setName(e.target.value)
      }} />
      <input type="text" placeholder="@email"  value={email} onChange={(e)=>{
        setEmail(e.target.value)
      }}/>

      <input type="password" placeholder="password" value={password} onChange={(e)=>{
        setPassword(e.target.value)
      }}/>


<button className="btn waves-effect waves-light"   onClick={() => PostData()}>SIGNUP
    <i className="material-icons right">send</i>
   
  </button>
    

      <h5>
        <Link to="/login" className='line'>Already have an account ?</Link>
      </h5>
    </div>
  </div>
  )
}

export default Signup