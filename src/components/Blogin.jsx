import React from 'react'
import "./Blogin.css"
import { Navigate, useNavigate } from 'react-router-dom'





    

function Blogin() {

    const navigate=useNavigate();

    const handle = () => {
        // Redirect logic here
        navigate('/Login'); // Use the navigate function from useNavigate
      };




    return (
        <>
        <div className="ima">
        <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
        </div>
            <div className="blog">
                <p className='m'>Streamline Success : Your Complete Resource Management  Solution.Click on</p>
                <p className='mm' >Create button to add Your employees</p>

              <div className='row'>
              <span class="material-symbols-outlined">
                    south
                </span>
              </div>
              
            </div>
           
           <div className='but'>
            
           <button type='submit' onClick={handle} className='submitBtn1'>Create Resource +</button>
           </div>

        </>
    )
}

export default Blogin