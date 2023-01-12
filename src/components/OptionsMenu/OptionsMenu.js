import React from 'react'

import { useState } from 'react'

import './OptionsMenu.css'

const OptionsMenu = ({ options }) => {

    const [selectedOption, setSelectedOption] = useState(options[0])

    const moveDiv = (option) => {
        if (option !== selectedOption) {
            const hola = document.querySelector(`.${option}`);
            const holaRect = hola.getBoundingClientRect();
            const linea = document.querySelector('.optionsmenu_div-sub');
            linea.style.transform = `translateX(calc(${holaRect.x-holaRect.width}px))`
            linea.style.width = `${holaRect.width}px`
            option === options[0] && (linea.style.marginLeft = '20px');
            option === options[1] && (linea.style.marginLeft = '5px')
            option === options[2] && (linea.style.marginLeft = '0px')
        }
    }

    return (

        <div className='optionsmenu_div'>
            
            <div className='optionsmenu_div-div'>

                {options.map((option) => {
                    return (
                        <div 
                            key={option} 
                            onClick={() => {
                                setSelectedOption()
                                moveDiv(option)
                            }} 
                            className={`optionsmenu_div-option ${option}`}
                        >
                            <span>{option}</span>
                        </div>
                    )
                })}

            </div>

            <div className='optionsmenu_div-sub'></div>

        </div>

    )

}

export default OptionsMenu