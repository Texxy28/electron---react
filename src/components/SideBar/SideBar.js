import React from 'react'
import { useState } from 'react'

import { SiMaterialdesignicons, SiBlueprint } from 'react-icons/si'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { RxText } from 'react-icons/rx'
import { VscFileSubmodule } from 'react-icons/vsc'
import { IoIosKeypad } from 'react-icons/io'

import SideBarButtons from '../SideBarButtons/SideBarButtons'
import './SideBar.css'
import { icons } from 'react-icons'

const SideBar = () => {

    const items = [
        {
            logo: <SiBlueprint color='#cbcbcc' size={30}/>,
            title: 'Design'
        },
        {
            logo: <SiMaterialdesignicons color='#cbcbcc' size={30}/>,
            title: 'Elements'
        },
        {
            logo: <AiOutlineCloudUpload color='#cbcbcc' size={30}/>,
            title: 'Uploads'
        },
        {
            logo: <RxText color='#cbcbcc' size={30}/>,
            title: 'Text'
        },
        {
            logo: <VscFileSubmodule color='#cbcbcc' size={30}/>,
            title: 'Projects'
        },
        {
            logo: <IoIosKeypad color='#cbcbcc' size={30}/>,
            title: 'Apps'
        }
    ]

    const [selectedItem, setSelectedItem] = useState(items[0].title);

    return (

        <div className='sidebar_div'>

            {items.map((boton) => {
                return (
                    <SideBarButtons
                        key={boton.title}
                        logo={boton.logo}
                        nombre={boton.title}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                    />
                )
            })}

        </div>
        
    )

}

export default SideBar