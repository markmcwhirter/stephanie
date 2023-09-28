import React from 'react';
import './modalStyles.scss';
import { useMGMtContext } from '../../util/MGMContextProvider';

const Modal = (props) => {
    const {setModalOpen, modalOpen} = useMGMtContext();

    const handleClose = (e) => {
        // Controls event delegation from bubbling
        e.stopPropagation();
        // Closes modal
        setModalOpen(false);
    }

    return (
        <div
            className={modalOpen ? "modal--show" : "modal--hide"}
            onClick={handleClose}
        >
            <div
                className="modal__content"
                onClick={e => e.stopPropagation()}
            >
                <span
                    className="modal__close"
                    onClick={handleClose}
                ></span>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;
