import React from 'react'

import './SideBarButtons.css'

const SideBarButtons = ({ logo, nombre, selectedItem, setSelectedItem }) => {
    
    return (

        <div 
            className='sideBarButtons_div'
            onClick={() => setSelectedItem(nombre)}
        >
            {selectedItem === nombre && (
                <div className='selected'></div>
            )}
            
            <div 
                className={`item ${nombre === selectedItem ? 'selectedItem' : ''}`}
            >
                <div className='icon'>
                    {logo}
                </div>
                <div><span>{nombre}</span></div>
            </div>

        </div>

    )

}

export default SideBarButtons