import modal from "../css/modal.module.css";
import { useState } from "react";

const Modal = ({modalObject})=>{
    const [modalToggle, setModalToggle] = useState(false);
    const close = () =>{
        
    }

    return (
        <div classNme="modal" style={{display}}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>{modalObject.header}</h2>
                </div>
                <div className="modal-body">
                    {modalObject.body}
                </div>
                <div className="modal-footer">
                    <h3>{modalObject.footer}</h3>
                </div>
            </div>
        </div>
    );

}