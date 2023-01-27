import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import { useState, useEffect } from 'react'

import './OptionsMenu.css'

const OptionsMenu = ({ options , getOption, layoutType, searchOption, oculto }) => {

    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [moveRight, setMoveRight] = useState(true)
    const [moveLeft, setMoveLeft] = useState(false)

    useEffect(() => {
        const hola = document.querySelector(`.${selectedOption}`);
        if (hola) {
            const holaRect = hola.getBoundingClientRect();
            const linea = document.querySelector('.optionsmenu_div-sub');
            linea.style.transform = `translateX(${holaRect.left}px)`;
            console.log(holaRect.right, holaRect.left, holaRect.width);
            linea.style.width = `${holaRect.width}px`;
            linea.style.transition = 'transform 0.5s ease, width 1s ease'
            getOption(selectedOption)
        } else {
            return
        }
    });

    const moverDiv = (dir) => {
        const hola = document.querySelector('.optionsmenu_div-div');
        if (hola) {
            if (dir === 'left') {
                hola.scrollBy({
                    top: 0,
                    left: -100,
                    behavior: 'smooth'
                })
            } else if (dir === 'right') {
                hola.scrollBy({
                    top: 0,
                    left: 100,
                    behavior: 'smooth'
                })
            }
        }
    }

    const movimientoX = () => {
        const hola = document.querySelector('.optionsmenu_div-div')
        if (hola) {
            const hola2 = document.querySelector(`.${selectedOption}`);
            const holaRect = hola2.getBoundingClientRect();
            const linea = document.querySelector('.optionsmenu_div-sub');
            linea.style.zIndex = '0'
            linea.style.transform = `translateX(${holaRect.left}px)`;
            linea.style.transition = '0s'
        }
        if (hola && hola.scrollLeft > 0) {
            setMoveLeft(true)
        } else if (hola && hola.scrollLeft <= 0) {
            setMoveLeft(false)
        } 
        if (hola && hola.scrollLeft >= hola.scrollWidth-302) {
            setMoveRight(false)
        } else if (hola && hola.scrollLeft < hola.scrollWidth-302) {
            setMoveRight(true)
        }
    }

    useEffect(() => {

        const hola = document.querySelector('.optionsmenu_div-div');
        if (hola && hola.scrollLeft > 0) {
            setMoveLeft(true)
        } else if (hola && hola.scrollLeft <= 0) {
            setMoveLeft(false)
        } 
        if (hola && hola.scrollLeft >= hola.scrollWidth-302) {
            setMoveRight(false)
        } else if (hola && hola.scrollLeft < hola.scrollWidth-302) {
            setMoveRight(true)
        }
    })

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
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
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

                        <div>

                            <div className='optionsmenu_div-div'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    overflowX: 'scroll',
                                }}
                                onScroll={() => {
                                    movimientoX()
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
                                            style={{
                                                minWidth: 'auto',
                                                maxWidth: 'auto',
                                                padding: '0px 9px'
                                            }}
                                        >
                                            <span>{option}</span>
                                        </div>
                                    )
                                })}

                                <div 
                                    className='optionsmenu_div-sub'
                                ></div>

                            </div>

                            {moveLeft && (
                                <div
                                    onClick={() => {
                                        moverDiv('left')
                                    }}
                                    className='optionsmenu_div-move optionsmenu_div-moveLeft'
                                    style={{
                                        top: '65px',
                                    }}
                                >
                                    <AiOutlineLeft size={13} />
                                </div>
                            )}

                            {moveRight && (
                                <div
                                    onClick={() => {
                                        moverDiv('right')
                                    }}
                                    className='optionsmenu_div-move optionsmenu_div-moveRight'
                                    style={{
                                        top: '65px',
                                    }}
                                >
                                    <AiOutlineRight size={13} />
                                </div>
                            )}

                            </div>                

                    )
                )
            }

        </div>

    )

}

export default OptionsMenu