import React from 'react';


function LoginPopup(props) {
    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={props.closePopup}>X</button>
                {props.content}
            </div>
        </div>
    );
}
