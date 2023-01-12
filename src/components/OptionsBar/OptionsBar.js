import React from 'react'

import DesignOptions from '../DesignOptions/DesignOptions'
import ElementsOptions from '../ElementsOptions/ElementsOptions'
import UploadsOptions from '../UploadsOptions/UploadsOptions'

import './OptionsBar.css'

const OptionsBar = ({ selectedItem }) => {

    const options = [
        {
            title: 'Design',
            item: DesignOptions
        },
        {
            title: 'Elements',
            item: ElementsOptions
        },
        {
            title: 'Uploads',
            item: UploadsOptions
        }
    ]

    return (

        <div className='optionsBar_div'>

            {options.map((option) => {
                if (selectedItem === option.title) {
                    return <option.item key={option.title}/>;
                }
            })}

        </div>

    )

}

export default OptionsBar