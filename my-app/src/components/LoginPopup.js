import React from 'react';
import './LoginPopup.css';


function LoginPopup(props) {
    
    return (props.trigger) ? (
        <div className='popup'>
            
                <div className='popup-inner'>

                    <button className="close-btn"onClick={() => props.setTrigger(false)}>close</button>
                    <p>Login</p>
                </div> 
        </div>
    ) : "";
}

export default LoginPopup