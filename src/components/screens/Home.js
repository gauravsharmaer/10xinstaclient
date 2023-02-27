import React,{useState,useEffect} from 'react'

const Home = () => {
   const [data,setData]=useState([])
   const [like,setLike]=useState(0)


   const likecounter=()=>{
      setLike(like+1)
   }
   useEffect(()=>{
          fetch("/allpost",{
            headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
          }).then((res)=>res.json())
          .then((result)=>{
            console.log(result.posts)
            setData(result.posts)

          })
   },[])










  return (
    <div className='home'>
    {
      data.map((item)=>{
         return (
            <div className='card home-card' key={item._id}>
           <h5>{item.postedBy.name}</h5>
          <div className='menu-dots'>
          
           <h6>India</h6>

           <i className="material-icons ">more_horiz</i>
           </div>
           <div className='card-image'>
            <img src={item.photo} alt='pic'/>
           </div>
           <div className='card-content'>
           <i className="material-icons " onClick={likecounter} style={{color:"red"}}>favorite</i>
           <i className="material-icons ">send</i>
            <div >{like} likes </div>
            <h6>{item.title}</h6>
            <p>{item.body}</p>
            <input type="text" placeholder='add a comment'/>
           </div>
        </div>

         )
      })
    }
       


      


  


       


    </div>
  )
}

export default Home 