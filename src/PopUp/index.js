import React from "react";
import './index.css';
const PopUp = ({isOPen, onClose, children }) => {
    if (!isOPen) return null;
    const overlay =(e) =>{
        e.stopPropagation();
        onClose();
    };
    const content = (e) =>{
        e.stopPropagation();
    }
    return(
        <div onClick={overlay} className="popUp">
            <div onClick={content} className="login-popUp">
                {children}
            </div>
        </div>
    )
}
export default PopUp;