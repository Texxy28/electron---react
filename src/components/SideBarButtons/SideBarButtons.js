import React from 'react'

import './SideBarButtons.css'

const SideBarButtons = ({ logo, nombre, selectedItem, setSelectedItem }) => {

    return (

        <div 
            className={selectedItem === nombre ? 'sideBarButtons_div selected' : 'sideBarButtons_div'}
            onClick={() => setSelectedItem(nombre)}
        >
            
            <div className='icon'>
                {logo}
            </div>
            <div><span>{nombre}</span></div>

        </div>

    )

}

export default SideBarButtons