import { useRef, useState } from "react";
import api from "../../Api";
import logincss from "../../css/login.module.css";
import Logo from "../../images/logo.png";
import { useNavigate } from "react-router";
import Loading from "../../components/loading";

const Login = () =>{
    const username = useRef();
    const password = useRef();
    const [shLoading, setShLoading] = useState(false);

    let navigate = useNavigate();
    return(
    <div>
        <div className={`col-12 ${logincss.loginDiv}`}>
            <div className={`col-6`}>
                <div>
                    <img src={Logo} width="250" /><br />
                </div>
            </div>
            <div className={`col-6 col-xs-12`}>
                <div>
                <h1 style={{color: 'var(--main-color)',fontSize:30}}>Login</h1>
                <span>Email<span className={addPcss.required}>*</span></span><br />
            <input type="text" ref={username} className={addPcss.input} placeholder="Enter email" /><br />
            <span>Password<span className={addPcss.required}>*</span></span><br />
            <input type="text" ref={password} className={addPcss.input} placeholder="Enter password" /><br />
            <p className={addPcss.btnP}>
                <button className={addPcss.btn} onClick={()=>{
                    setShLoading(true);
                    const user = {
                        email: username.current.value,
                        password: password.current.value
                    }
                    //console.log(user,"user")
                    api.PostApi('/login/submit', user)
                    .then(response=>response.json())
                    .then(response=>{  
                        console.log(response, "response");
                        setShLoading(false)
                        if(response.isSuccessful){
                            sessionStorage.setItem("rccg-token", response.token);
                        
                            navigate('/admin')
                        }
                        else{
                            alert(response.message);
                            console.log(response)
                        }
                        //console.log(response) 
                        
                    })
                    .catch(err=>{
                        //console.log(err)
                        setShLoading(false)
                       alert("Action failed. Wrong username or password")
                    })
                }}>Login</button>
            </p>
              
                </div>
                
            </div>
        </div>
        <Loading shouldShow={shLoading} />  
    </div>)
}
export default Login