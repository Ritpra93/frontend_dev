import React from 'react'
import ReactDom from 'react-dom'


export default function Portal(){
    return ReactDom.createPortal(
        <div className='portal-container'>
        >Por  tal</div>,
        document.getElementById('portal')
    )
}