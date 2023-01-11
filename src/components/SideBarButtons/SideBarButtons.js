import React from 'react'

import './SideBarButtons.css'

const SideBarButtons = ({ logo, nombre, selectedItem, setSelectedItem }) => {

    let div;
    let coords;

    return (

        <div 
            className='sideBarButtons_div'
            onClick={() => setSelectedItem(nombre)}
        >
            {selectedItem === nombre && (
                <div className='selected'></div>
            )}
            
            <div className='icon'>
                {logo}
            </div>
            <div><span>{nombre}</span></div>

        </div>

    )

}

export default SideBarButtons