import React, { useRef } from 'react'
import Exit from "../content/x.png";

export default function Modal({header, subtext, content, changeModalState}) {

    const modal = useRef();
    const xButton = useRef();

    const alterModalState = () => {
        console.log("altering modal state");

        changeModalState(-1);
    }

    return (
        <div className="modal-popup modal-slide-in" ref={modal}>
            <section className="modal-popup-hero">
                <h1>{header}</h1>
                <p>{subtext}</p>    
            </section>            
            
            {content}
            <img src={Exit} alt="exit" className="exit" draggable="false" ref={xButton} onClick={alterModalState} />  
        </div>
    )
}
