import React from 'react';

const Modal = ({ onClose }) => {
    return (
        <div className="flex flex-col gap-2 items-center border rounded-lg absolute top-20 left-12 bottom-20 z-10 bg-black text-white p-2" role="dialog" aria-modal="true">
            <p>I am a modal </p>
            <button
                className='bg-white text-black p-1 border rounded-md shadow'
                onClick={onClose}>Close</button>
        </div>
    );
};

export default Modal;