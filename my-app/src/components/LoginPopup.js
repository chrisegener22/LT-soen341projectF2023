import React from 'react';
import './LoginPopup.css';


function LoginPopup(props) {
    
    return (props.trigger) ? (
        <div className='popup'>
            
                <div className='popup-inner'>

                    <button className="close-btn"onClick={() => props.setTrigger(false)}>close</button>
                    <p>Login</p>
                    <input className='login-txtbx' type="login" placeholder="Enter username" />
                    <br></br>
                    <input className='pass-txtbx' type="password" placeholder="Enter password" />
                    <br></br>
                    <button className='login-btn'onClick= {() => props.setTrigger(false)}>Login</button>
                    <br></br>
                    <button className='register-btn'>Register</button>
                  

                </div> 
        </div>
    ) : "";
}

export default LoginPopup