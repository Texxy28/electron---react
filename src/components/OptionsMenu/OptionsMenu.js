import React from 'react'

import { useState, useEffect } from 'react'

import './OptionsMenu.css'

const OptionsMenu = ({ options , getOption, layoutType, searchOption, oculto }) => {

    const [selectedOption, setSelectedOption] = useState(options[0]);

    useEffect(() => {
        const hola = document.querySelector(`.${selectedOption}`);
        if (hola) {
            const holaRect = hola.getBoundingClientRect();
            const linea = document.querySelector('.optionsmenu_div-sub');
            linea.style.transform = `translateX(calc(${holaRect.left}px))`;
            console.log(holaRect.right, holaRect.left, holaRect.width);
            linea.style.width = `${holaRect.width}px`;
            getOption(selectedOption)
        } else {
            return
        }
    });

    return (

        <div className='optionsmenu_div'
            style={{
                margin: oculto ? '0px 0px 0px 0px' : '15px 0px'
            }}
        >
            
            {
                layoutType === 'normal' && (
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
                                    className={`optionsmenu_div-option ${option===selectedOption ? 'selectedOp': ''} ${option}`}
                                >
                                    <span>{option}</span>
                                </div>
                            )
                        })}

                    <div 
                        className='optionsmenu_div-sub'
                    ></div> 
                        
                    </div>
                )
            } 

            {
                layoutType === 'hidden' && (
                    searchOption !== '' && (
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
                                        className={`optionsmenu_div-option ${option===selectedOption ? 'selectedOp': ''} ${option}`}
                                    >
                                        <span>{option}</span>
                                    </div>
                                )
                            })}

                            <div 
                                className='optionsmenu_div-sub'
                            ></div>

                        </div>
                    )
                )
            }

        </div>

    )

}

export default OptionsMenu