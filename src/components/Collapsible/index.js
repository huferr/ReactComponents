import React, {useState} from 'react'
import './styles.css'

const Collapsible = ({children, label}) => {
    
    const [IsOpen, setIsOpen] = useState(false)
    
    return (
        <div className='container'>
            <button className='toggle' onClick={() => setIsOpen(!IsOpen)}>{label}</button>
            
            <div className={IsOpen ? 'content show' : 'content'}>{children}</div>
        </div>
    )
}

export default Collapsible