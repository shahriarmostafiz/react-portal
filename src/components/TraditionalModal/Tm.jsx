import React, { useState } from 'react';
import Modal from '../Modal';
import { createPortal } from 'react-dom';

const Tm = () => {
    const [modalState, setModalState] = useState(false)
    return (
        <div className="relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden">
            <h1 className="py-1">
                This is the parent Div
            </h1>
            <button
                onClick={() => setModalState(true)}
                className='bg-black px-3 py-1 rounded shadow text-yellow-100 font-medium'
            >Open Modal </button>
            {
                modalState && createPortal(<Modal onClose={() => setModalState(false)} />, document.body)
            }
        </div>
    );
};

export default Tm;