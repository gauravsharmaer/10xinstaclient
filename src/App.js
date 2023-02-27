import {React,useEffect,createContext,useReducer,useContext} from 'react'
import Navbar from './components/Navbar'
import "./App.css";
import  {BrowserRouter,Routes,Route,useNavigate} from "react-router-dom"
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';
import CreatePost from './components/screens/CreatePost';
import {reducer,initialState} from "./reducers/userReducer"


export const usercontext=createContext()

const Routing=()=>{
  const navigate=useNavigate()
  const {state,dispatch}=useContext(usercontext)
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user){
dispatch({type:"USER",payload:user})
      navigate("/")
    }
    else{
      navigate("/login")
    }
  },[])
  return(
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/signup" element={<Signup />} />
    <Route path='/CreatePost' element={<CreatePost/>}/>
  </Routes>
  )
}
const App = () => {
const [state,dispatch]=useReducer(reducer,initialState)
  return (
   <>
   <usercontext.Provider value={{state,dispatch}}>
   <BrowserRouter>
    <Navbar />
     <Routing/>
    </BrowserRouter>
</usercontext.Provider>
   </>
  )
}

export default App