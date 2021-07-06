import React, {useState} from 'react'

const Collapsible = ({children, label}) => {
    
    const [IsOpen, setIsOpen] = useState(false)
    
    return (
        <div className='container'>
            <button className='toggle'>{label}</button>
            <div className='content'>{children}</div>
        </div>
    )
}