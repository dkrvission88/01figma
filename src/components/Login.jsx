import React from 'react'
import "./Login.css"
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'




function Login() {
    const[empname,setEmpname]=useState("")
    const[email,setEmail]=useState("")
    const[website,setWebsite]=useState("")
    const[emposition,setEmposition]=useState("")
    const[jdate,setJdate]=useState("")
    const[skill,setSkill]=useState("")
    const[salary,setSalary]=useState("")
    const[rating,setRating]=useState("")
    const[deviceid,setDeviceid]=useState("")
    const[remark,setRemark]=useState("")

const handle=(e)=>{
    e.preventDefault()

    alert(`
    Employee Name:{empname},
    Email: email,
    `)

}



    const navigate = useNavigate();

    const handleRedirect = () => {
        // Redirect logic here
        navigate('/Rcreated'); // Use the navigate function from useNavigate
    };



    return (
        <>
            <div className="resourcem">

                <form className='resource_form' onSubmit={(e)=>handle}>
                    <h1>Resource Management</h1>
                    <div className="emp">
                        <label className='uemp'>Employee Name<sup>*</sup> </label><br />
                        <input type='text' name='employee' placeholder=' ' value={empname} onChange={(e)=>setEmpname(e.target.value)} ></input>
                    </div>

                    <div className='first'>

                        <div className="empEmail">
                            <label className='uempEmail'>Email <sup>*</sup> </label><br />
                            <input type='email' name='email' placeholder=' ' value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
                        </div>
                        <div className="empId">
                            <label className='uempId'>Website<sup>*</sup> </label><br />
                            <input type='id' name='id' placeholder=' ' value={website} onChange={(e)=>setWebsite(e.target.value)} ></input>
                        </div>
                    </div>

                    <div className='second'>
                        <div className="empPosition">
                            <label className='uempPosition'>Employee Position<sup>*</sup> </label><br />
                            <input type='text' name='position' placeholder=' ' value={emposition} onChange={(e)=>setEmposition(e.target.value)} ></input>
                        </div>
                        <div className="empJoin">
                            <label className='uempJoin'>Joining Date<sup>*</sup> </label><br />
                            <input type='date' name='Date' placeholder=' ' value={jdate} onChange={(e)=>setJdate(e.target.value)} ></input>
                        </div>
                    </div>

                    <div className="empSkill">
                        <label className='uempSkill'>Skills<sup>*</sup> </label><br />
                        <input type='text' name='skills' placeholder=' ' value={skill} onChange={(e)=>setSkill(e.target.value)} ></input>
                    </div>

                    <div className='third'>

                        <div className="empSalary">
                            <label className='uempSalary'>Salary<sup>*</sup> </label><br />
                            <input type='number' name='salary' placeholder=' ' value={salary} onChange={(e)=>setSalary(e.target.value)} ></input>
                        </div>
                        <div className="empRating">
                            <label className='uempRating'>Rating<sup>*</sup> </label><br />
                            <input type="text" name='rating' placeholder=' ' value={rating} onChange={(e)=>setRating(e.target.value)} ></input>
                        </div>
                        <div className="empDevice">
                            <label className='uempDevice'>Assigned Device ID </label><br />
                            <input type='text' name='device ID' placeholder=' ' value={deviceid} onChange={(e)=>setDeviceid(e.target.value)} ></input>
                        </div>

                    </div>

                    <div className="remsrks">
                        <label type='text' className='uremarks'>Remarks</label><br />
                        <textarea id='rem' name='remarks' value={remark} onChange={(e)=>setRemark(e.target.value)} ></textarea>

                        
                    </div>

                    <div className="btn">
                    <button onClick={handleRedirect} type='submit' className='submitBtn'>Create Resource *</button>
                    </div>
                    
                </form>



            </div>

        </>
    )
}

export default Login