import React from 'react'
import Styles from "./JobPost.module.css"

const payload={
    title:"",
    salary:"any",
    subtitle:"",
    department: "Audit",
    location:"Bangalore",
    experience:"any",
    email:"",
    description:"",
    telephone:"",
    skills:[]
}

function JobPostInput() {
    const [data, setData]=React.useState(payload)
    const [skillData, setSkillData]= React.useState("")
    const {title,salary,subtitle,department,location,experience,email,description,telephone}=data

    const handleChange=(e)=>{
        const {value,name}=e.target;
        if(name != 'skills'){
            setData({...data,[name]:value})
        }
    }
    const handlearr=(skillData)=>{
       ( data.skills).push(skillData+" ")
    }
    const handleSubmit=()=>{
        console.log(data)
    }
    return (
        <div>
              <div className={Styles.sub1}>
             <div style={{textAlign:"left"}}>
                <p style={{fontSize:"42px"}}>Create Job Alert 2021</p>
                <p style={{fontSize:"24px"}}>You can create alerts here</p>
            </div>
            <div className={Styles.input}>
                <h4 style={{fontSize:'20px'}}>Let us know what kind of employee you are looking for and we'll send them to your Inbox.</h4>
                <div style={{display:'flex',}}>
                <div style={{display:'flex', flexDirection:"column",justifyContent:"space-around", alignItems:"left"}}>
            <label >Job Title</label>
            <label> Company Name</label>
            <label >Salary</label>
            <label >Department</label>
            <label >Location</label>
            <label >Experience</label>
            <label>Email ID</label>
            <label>TelePhone</label>
            <label >Description</label>
            <label >Skills</label>
            </div>
            <div  style={{width:"100%",display:'flex', flexDirection:"column",justifyContent:"space-around", alignItems:"left"}}>  
            <input placeholder="Enter Title " name="title" value={title} onChange={handleChange} type="text"/>
            <input placeholder="Add Company Name" name="subtitle" value={subtitle} onChange={handleChange} type="text"/>
            <select onChange={handleChange} name='salary'value={salary}>
                <option value="any">-Any-</option>
                <option value="50000">Rs 50,000</option>
                <option value="1">Rs 1 Lakh/Yr</option>
                <option value="2">Rs 2 Lakh/Yr</option>
                <option value="3">Rs 3 Lakh/Yr</option>
                <option value="4">Rs 4 Lakh/Yr</option>
                <option value="5">Rs 5 Lakh/Yr</option>
                <option value="6">Rs 6 Lakh/Yr</option>
                <option value="7">Rs 7 Lakh/Yr</option>
                <option value="8">Rs 8 Lakh/Yr</option>
                <option value="9">Rs 9 Lakh/Yr</option>
                <option value="10">Rs 10Lakh/Yr</option>
            </select>
            
            <select name="department" id="Department" value={department} onChange={handleChange}>
             <option value="Audit">Audit</option>
             <option value="Equity Research">Equity Research</option>
             <option value="Finance/Account/Tax">Finance/Account/Tax</option>
             <option value="Investment Banking">Investment Banking</option>
             <option value="Risk/ Underwriting">Risk/ Underwriting</option>
             <option value="Securities Trading">Securities Trading</option>
             <option value="Back operation Services">Back operation Services</option>
             <option value="Customer Services">Customer Services</option>
             <option value="Operations Management">Operations Management</option>
             <option value="Technical Support">Technical Support</option>
             <option value="Application programming/Maintainance">Application programming/Maintainance</option>
             <option value="Client Server">Client Server</option>
             <option value="DBA/ Data warehouse">DBA/ Data warehouse</option>
             <option value="Mainframe">Mainframe</option>
             <option value="Middleware">Middleware</option>
             <option value="Networking">Networking</option>
             <option value="Telecom Software">Telecom Software</option>
             <option value="Pre-Sales">Pre-Sales</option>
            </select>
            
            <select name="location" id="location" onChange={handleChange} value={location}>
             <option value="Bangalore">Bangalore</option>
             <option value="Chennai">Chennai</option>
             <option value="Delhi">Delhi</option>
             <option value="Mumbai">Mumbai</option>
             <option value="Gurgao">Gurgao</option>
             <option value="Kolkatta">Kolkatta</option>
             <option value="Gujarat">Gujarat</option>
             <option value="Mysore">Mysore</option>
             <option value="Jharkhand">Jharkhand</option>
             <option value="Noida">Noida</option>
             <option value="Pune">Pune</option>
             <option value="Mysore">Mysore</option>
             <option value="Rajastan">Rajastan</option>
             <option value="Jammu/Kashmir">Jammu/Kashmir</option>
             <option value="Hridwar">Hridwar</option>
             <option value="MadyaPradesh">MadyaPradesh</option>
             <option value="Kerala">Kerala</option>
             <option value="Hydrabad">Hydrabad</option>
             <option value="Punjab">Punjab</option>
             <option value="Assam">Assam</option>
            </select>

            
            <select name="experience" value={experience} onChange={handleChange} >
                <option value="any">-Any-</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
            </select>
            <input value={email} onChange={handleChange} name="email" placeholder="Your Email Id" type="Email"/>
            <input value={telephone} onChange={handleChange} name="telephone" placeholder="Add Telephone" type="text"/>
            <input value={description} onChange={handleChange} name="description" placeholder="Descriotion about job" type="text"/>
            <div style={{display:'flex'}}>
            <input value={skillData} onChange={(e)=>setSkillData(e.target.value)} name="skills" placeholder="Skills" type="text"/> 
            <button className={Styles.addbtn} onClick={()=>handlearr(skillData)}>Add</button>

            </div>
            
            </div>
            </div>
            <div className={Styles.Register}>
                <button onClick={()=>handleSubmit(title,subtitle,)}>Create job Alert</button>
            </div>
            </div> 
            </div>
        </div>
    )
}

export default JobPostInput