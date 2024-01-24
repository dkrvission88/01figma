import React from 'react'
import "./rcreated.css"
import { Navigate, useNavigate } from 'react-router-dom'

function Rcreated() {

  const navigate=useNavigate();

  const hope = () => {
      // Redirect logic here
      navigate('/Blogin'); // Use the navigate function from useNavigate
    };



  return (
    <>

<div className="ima">
<lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_z01bika0.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
        </div>
       <form className='view'>
        <h3>Your resource is created successfully!</h3>
        
        <div className='but'>
            
            <button type='submit'  className='submitBtn1'>View</button>
            </div>
 
       </form>
    
    </>
  )
}

export default Rcreated