import React from 'react'

import { useState, useEffect } from 'react'

import './OptionsMenu.css'

const OptionsMenu = ({ options }) => {

    const [selectedOption, setSelectedOption] = useState(options[0])

    useEffect(() => {
        const hola = document.querySelector(`.${selectedOption}`);
        if (hola) {
            const holaRect = hola.getBoundingClientRect();
            const linea = document.querySelector('.optionsmenu_div-sub');
            // linea.style.transform = `translateX(calc(${holaRect.left - holaRect.width}px))`;
            // linea.style.width = `${holaRect.width}px`;
            linea.style.left = `${holaRect.left - holaRect.width}px`
        } else {
            console.log('no');
        }
    }, [selectedOption]);

    return (

        <div className='optionsmenu_div'>
            
            <div className='optionsmenu_div-div'
                style={{
                    gridTemplateColumns: `repeat(${options.length}, 1fr)`
                }}
            >

                {options.map((option) => {
                    return (
                        <div 
                            key={option} 
                            onClick={() => {
                                setSelectedOption(option)
                            }}
                            className={`optionsmenu_div-option ${option}`}
                        >
                            <span>{option}</span>
                        </div>
                    )
                })}

            </div>

            <div 
                className='optionsmenu_div-sub'
            ></div>

        </div>

    )

}

export default OptionsMenu