import React from "react";
import '../App.css';


const Modal = ({ closeModal, title }) => {
    return (
        <div className="modal dpf " >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header modal-h-cs">
                        <h5 className="modal-title">Notificacion</h5>
                        <button type="button" className="btn-close" onClick={closeModal()} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body modal-b-cs" >
                        <p>{title}</p>
                    </div>
                    <div className="modal-footer modal-f-cs">
                        <button type="button" className="btn btn-primary" onClick={closeModal()} data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;


