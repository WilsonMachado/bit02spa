import React from 'react'

export const Modal = ({title, text, children}) => {
  
  return (
    <>
        <div className='modal'>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{title}</h2>                   
                </div>
                <div className="modal-text">
                    <p>{text}</p>
                </div>
                <div className="modal-options">
                    {children}                  
                </div>
            </div>
        </div>
    </>
  )
}
