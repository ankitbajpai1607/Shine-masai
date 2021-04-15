import React, { useState } from "react"
import styles from "../Register/Register.module.css"
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import logo1 from "../../Images/logo1.png"
import google from "../../Images/google.png"
import ld from "../../Images/ld.png"
import fb from "../../Images/fb.png"
import regi from "../../Images/regi.png"
import Regifooter from "./Regifooter"




function Register()
{
 

      const [page1, setPage1] = useState(true)
      const [page2, setPage2] = useState(true)
      const [page3, setPage3] = useState(true)
      const [page4, setPage4] = useState(true)
      const [page5, setPage5] = useState(true)
      const [page6, setPage6] = useState(true)
      

      const [iscollege, setIscollege] = useState(false)
      const [isyear, setIsyear] = useState(false)

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [mobile, setMobile] = useState("");
      const [pass, setPass] = useState("");
      const [gender, setGender] = useState("");
      const [location, setLocation] = useState("");

      const [degree, setDegree] = useState("");
      const [college, setCollege] = useState("");
      const [year, setYear] = useState("");
      const [course, setCourse] = useState("");
      
      const[skills, setSkills] = useState([]);
      const[ oneskill, setOneskill] = useState();
      const addskills = () => {  

           setSkills([...skills, oneskill])
           console.log(skills)
      } 
      

      



     function regi1()
     {

      console.log("continue clicked")
      setPage1(false)
     }

     function regi2()
     {
      console.log("continue clicked")
      setPage2(false)
     }


     function regi3()
     {
      console.log("continue clicked")
      setPage3(false)
     }

     function regi4()
     {
      console.log("continue clicked")
      setPage4(false)
     }

     function regi5()
     {
      console.log("continue clicked")
      setPage5(false)
     }

     function regi6()
     {
      console.log("continue clicked")
      setPage6(false)
     }

     function regi7()
     {
      console.log("continue clicked7");
      return(
        <Redirect to="/" push />
      )
     }


    const [gologin, setGologin] = useState(false)
    function logintab()
    {
      console.log("SA");
      setGologin((pre) => !pre)
    }


    if(gologin)
    {
       return <Redirect to="/myshine/login"/>
     }





    return page1?(
        <div>
            
           <div className={styles.top}>
               <img src={logo1} />
               <div className={styles.login}
               onClick={() => logintab() }
               >Login</div>

           </div>

          
           <div className={styles.cont}>

   <div className={styles.mid}>
               <div className={styles.contimg}>
                  <img src={regi} alt=""/>
               </div>

             <div className={styles.cont1}>
                 <br/>
               <h2></h2>
               <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}  /><br/><br/>
               <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
               <input type="text" placeholder="Mobile Number" value={mobile}  onChange={(e) => setMobile(e.target.value)} /><br/><br/>
               <input type="password" placeholder="Password" value={pass}  onChange={(e) => setPass(e.target.value)} /><br/><br/>

                <div className={styles.conti} onClick={() => regi1()}>
                         Continue →  
                     </div>




           
            <p style={{display:"flex", flexDirection:"row"}}><span><hr width="185px"/></span><span style={{width:"10px"}}></span> <span style={{color:"gray"}}>or</span> <span style={{width:"10px"}}></span> <span><hr width="185px"/></span></p>    
          
            <div className={styles.social}>
              <div><img src={google} alt=""/> <p>Google</p></div>
              <div><img src={ld} alt=""/> <p>Linkedin</p></div>
              <div><img src={fb} alt=""/> <p>Facebook</p></div>

            </div>
            <p style={{fontSize:"10px", color:"rgb(112, 82, 82)"}}>By syncing your social media account, you agree to shine <span style={{color:"blue"}}>terms and conditions</span></p>

        
           </div>


    </div>
           </div>
              <Regifooter/>
             


        </div>
    ):page2?(
        <div>
          <h1>This is second Page</h1>

          

          
           <div className={styles.cont}>
     <div className={styles.commoncont}>
               

             <div className={styles.commoncont1}> 
             <div>
             <span style={{fontSize:"28px", fontWeight:"800"}}>Welcome {name},</span> 
                <p style={{fontSize:"15px", fontWeight:"400", color:"#6d7883"}}>Thanks for registering with us. Complete your profile and find the right job in a few steps</p> 
                <h4 style={{fontSize:"20px", fontWeight:"800", color:"#6d7883"}}>What is your identity?</h4> 
             </div>
             </div>

             <div className={styles.commoncont1}> 
                 <button className={styles.identity} onClick={() => setGender("male")}><div className={styles.identity1} width="50px"  style={{marginLeft:"20px",marginTop:"10px"}}></div>Male</button>
                 <button className={styles.identity} onClick={() => setGender("female")}><div className={styles.identity2} width="55px"  style={{marginLeft:"20px",marginTop:"15px"}}></div>Female</button>
                 <button className={styles.identity} onClick={() => setGender("non-binary")}><div className={styles.identity3} width="80px"  style={{marginLeft:"15px",marginTop:"10px"}}></div>Non-binary</button>
                 <button className={styles.identity} onClick={() => setGender("prefer not to say")}><div className={styles.identity4} width="100px"  style={{marginLeft:"20px",marginTop:"0px"}}></div>Prefer not to say</button>
                
             </div>
               
               
            <div className={styles.commoncont2}>
            <div className={styles.commoncontconti} onClick={() => regi2()}>
                         Continue →  
            </div>
            </div>        
    </div>
           </div>
           <Regifooter/>   



        </div>
    ):page3?(
      <div>
         <h1>This is third Page</h1>

          
         <div className={styles.cont}>
     <div className={styles.commoncont}>
              
             <div className={styles.commoncont2}> 
             <h4 style={{fontSize:"28px", fontWeight:"800",marginRight:"20%",marginTop:"3px"}}>Which city do you live in?</h4> 
             </div>
             
             <div className={styles.commoncont1}>
                 <button className={styles.identity} onClick={() => setLocation("Delhi/NCR")}><div className={styles.identity5} width="50px"  style={{marginLeft:"20px",marginTop:"10px"}}></div>Delhi NCR</button>
                 <button className={styles.identity} onClick={() => setLocation("Mumbai")}><div className={styles.identity6} width="55px"  style={{marginLeft:"10px",marginTop:"15px"}}></div>Mumbai</button>
                 <button className={styles.identity} onClick={() => setLocation("Pune")}><div className={styles.identity7} width="80px"  style={{marginLeft:"15px",marginTop:"10px"}}></div>Pune</button>
              </div>
             <div className={styles.commoncont1}>
                 <button className={styles.identity} onClick={() => setLocation("Banglore")}><div className={styles.identity8} width="50px"  style={{marginLeft:"20px",marginTop:"10px"}}></div>Banglore</button>
                 <button className={styles.identity} onClick={() => setLocation("Chennai")}><div className={styles.identity9} width="55px"  style={{marginLeft:"20px",marginTop:"15px"}}></div>Chennai</button>
                 <button className={styles.identity} onClick={() => setLocation("Hyderabad")}><div className={styles.identity10} width="80px"  style={{marginLeft:"15px",marginTop:"10px"}}></div>Hyderabad</button> 
              </div>
             <div className={styles.commoncont2}> 
               <input 
               style={{marginRight:"12%", height:"40px", width:"500px", borderRadius:"5px", border:"gray 1px solid" }}
               type="text" 
               placeholder="Enter Location"
               value={location}
               onChange={(e) => setLocation(e.target.value)}
               />
             </div>
               
            <div className={styles.commoncont2}>
            <div className={styles.commoncontconti} onClick={() => regi3()}>
                         Continue →  
            </div>
            </div>        
    </div>
           </div>
           <Regifooter/>


      </div>
    ):page4?(
      <div>
         <h1>This is four Page</h1>


   
         <div className={styles.cont}>
     <div className={styles.commoncont}>
              

             <div className={styles.commoncont2}>
             <h4 style={{fontSize:"28px", fontWeight:"800",marginRight:"20%",marginTop:"3px"}}>Have you ever worked?</h4>  
             </div>


             <div className={styles.commoncont1}> 
             <button className={styles.identity_second}><div className={styles.identity11} width="50px"  style={{marginLeft:"10px",marginTop:"10px",}}></div> <h4 style={{marginLeft:"5px",marginTop:"25px", width:"170px",  fontSize:"15px", color:"grey"}}>Yes, I have worked</h4></button>
             <button className={styles.identity_second}><div className={styles.identity12} width="55px"  style={{marginLeft:"20px",marginTop:"15px",}}></div> <h4 style={{marginLeft:"20px",marginTop:"25px", width:"170px", color:"grey"}}>No, I don't have any work experience/ I am a fresher</h4> </button>
             </div>


             <div className={styles.commoncont1}> </div>
               
            <div className={styles.commoncont2}>
            <div className={styles.commoncontconti} onClick={() => regi4()}>
                         Continue →  
            </div>
            </div>        





    </div>
           </div>
           <Regifooter/>


      </div>
    ):page5?(
      <div>
         <h1>This is five Page</h1>



          
            
         <div className={styles.cont}>
     <div className={styles.commoncont}>
              
         
     <div className={styles.commoncont2}>
       <h4 style={{fontSize:"22px", fontWeight:"800",marginRight:"8%",marginTop:"3px", color:"rgb(75, 75, 75)"}}>Let us know your highest educational qualification</h4>  
     </div>

     <div className={styles.commoncont2}>
       <div className={styles.quali}>
        <button className={styles.identity_third} onClick={() => setDegree("M.C.A")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>M.C.A</h4> </button>
        <button className={styles.identity_third} onClick={() => setDegree("M.Sc")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>M.Sc</h4> </button>
        <button className={styles.identity_third} onClick={() => setDegree("B.A")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>B.A</h4> </button>
        <button className={styles.identity_third} onClick={() => setDegree("B.Sc")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>B.Sc</h4> </button>
        <button className={styles.identity_third} onClick={() => setDegree("B.Com")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>B.Com</h4> </button>
        <button className={styles.identity_third} onClick={() => setDegree("B.Ed")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>B.Ed</h4> </button>
        </div>

     </div> 
        <div className={styles.commoncont2} style={{marginTop:"0px"}}>
        <div className={styles.quali}>
         <button className={styles.identity_third} onClick={() => setDegree("B.Tech / B.E")}><h4 style={{marginLeft:"5px",marginTop:"8px", width:"",  fontSize:"15px", color:"grey"}}>B.Tech / B.E</h4></button>
         <button className={styles.identity_third} onClick={() => setDegree("M.Tech")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>M.Tech</h4> </button>
        <button className={styles.identity_third} onClick={() => setDegree("MBA / PGDM")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>MBA / PGDM</h4> </button>     
        </div>
      </div>
               
            <div className={styles.commoncont2}>
            <div className={styles.commoncontconti} onClick={() => regi5()}>
                         Continue →  
            </div>
            </div>                
    </div>
           </div>
           <Regifooter/>


      </div>
    ):page6?(
      <div>
         <h1>This is six Page</h1>



          
            
         <div className={styles.cont}>
     <div className={styles.commoncont}>
       
            

             <div className={styles.commoncont2}>
                  <h4 style={{fontSize:"22px", fontWeight:"800",marginRight:"0",marginTop:"3px", color:"rgb(75, 75, 75)", margin:"auto", textAlign:"center"}}>From which institute did you complete {degree}?</h4>  
             </div>

             <div className={styles.commoncont2} style={{marginTop:"-40px"}}> 
               <input 
               style={{marginRight:"", height:"40px", width:"500px", borderRadius:"5px", border:"gray 1px solid" }}
               type="text" 
               placeholder="Enter Collage Name"
               value={college}
               onChange={(e) => setCollege(e.target.value)}
               />
               <button 
               style={{height:"42px", width:"42px",marginRight:"60px", cursor:"pointer"}}
               onClick={() => setIscollege(true)}
               >→</button>
             </div> 

             {iscollege?(
                 <div className={styles.commoncont2} style={{marginTop:"-40px"}}> 
                 <p style={{marginRight:"350px"}}> In which year did you complete?</p>  
                   <input 
                style={{marginRight:"", height:"40px", width:"500px", borderRadius:"5px", border:"gray 1px solid" }}
               type="text" 
               placeholder="Enter Year"
               value={year}
               onChange={(e) => setYear(e.target.value)}
               />
               <button
               style={{height:"42px", width:"42px",marginRight:"60px",cursor:"pointer"}}
               onClick={() => setIsyear(true)}
               >→</button>
             </div>

             ):("")}

             {
               isyear?(
               <div>
                  <div className={styles.commoncont2} style={{marginTop:"10px"}}> 
             <p style={{marginRight:"370px"}}> What was your course type?</p>  
             </div>

             <div className={styles.commoncont2} style={{marginTop:"-20px"}}>
       <div className={styles.quali}>
        <button className={styles.identity_third} style={{height:"50px"}} onClick={() => setCourse("Full Time")}> <h4 style={{marginLeft:"5px",height:"80px", marginTop:"8px", width:"", color:"grey"}}>Full Time</h4> </button>
        <button className={styles.identity_third} style={{height:"50px"}} onClick={() => setCourse("Part Time")}> <h4 style={{marginLeft:"5px",height:"80px", marginTop:"8px", width:"", color:"grey"}}>Part Time </h4> </button>
        <button className={styles.identity_third} style={{height:"50px"}} onClick={() => setCourse("Correspondence")}> <h4 style={{marginLeft:"5px",height:"80px",  marginTop:"8px", width:"", color:"grey"}}> Correspondence</h4> </button>
        </div>
             </div> 
               </div>
            ):("")}


           



            

             



               
            <div className={styles.commoncont2}>
            <div className={styles.commoncontconti} onClick={() => regi6()}>
                         Continue →  
            </div>
            </div>        
    </div>
           </div>
           <Regifooter/>


      </div>
    ):(
      <div>
         <h1>This is seven Page</h1>



          
           
         <div className={styles.cont}>
     <div className={styles.commoncont}>

     <div className={styles.commoncont2}>
       <h4 style={{fontSize:"22px", fontWeight:"800",marginRight:"50%",marginTop:"3px", color:"rgb(75, 75, 75)"}}>Skills</h4>  
     </div>
                    
      <div className={styles.commoncont2}>
       <div className={styles.quali}>
        <button className={styles.identity_third} onClick={() => setSkills([...skills, "English" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>English &#43;</h4> </button>
        <button className={styles.identity_third} onClick={() => setSkills([...skills, "Hindi" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>Hindi  &#43;</h4> </button>
        <button className={styles.identity_third} onClick={() => setSkills([...skills, "Bussiness" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>Bussiness  &#43;</h4> </button>
        <button className={styles.identity_third} onClick={() => setSkills([...skills, "Excel" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>Excel  &#43;</h4> </button>
        <button className={styles.identity_third} onClick={() => setSkills([...skills, "Creo" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>Creo  &#43;</h4> </button>

        </div>

     </div> 
        <div className={styles.commoncont2} style={{marginTop:"0px"}}>
        <div className={styles.quali}>
        <button className={styles.identity_third}  onClick={() => setSkills([...skills, "Autocad" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>Autocad  &#43;</h4> </button>
         <button className={styles.identity_third} onClick={() => setSkills([...skills, "Ansys" ])}><h4 style={{marginLeft:"5px",marginTop:"8px", width:"",  fontSize:"15px", color:"grey"}}>Ansys  &#43;</h4></button>
         <button className={styles.identity_third} onClick={() => setSkills([...skills, "ProE" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>ProE  &#43;</h4> </button>
        <button className={styles.identity_third}  onClick={() => setSkills([...skills, "Matlab" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>Matlab  &#43;</h4> </button>     
        </div>
      </div>


      <div className={styles.commoncont2}> 
               <input 
               style={{marginRight:"", height:"40px", width:"500px", borderRadius:"5px", border:"gray 1px solid" }}
               type="text" 
               placeholder="Enter Skills"
               value={oneskill}
               onChange={(e) => setOneskill(e.target.value)}
               />
                <button
               style={{height:"42px", width:"42px",marginRight:"60px",cursor:"pointer"}}
               onClick={() => addskills()}
               >→</button>
      </div>







            <div className={styles.commoncont2}>
            <Link className={styles.commoncontconti} path={"/"}>
                         Continue →  
            </Link>
            </div>        
    </div>
           </div>
           <Regifooter/>


      </div>
    )
}

export default Register;