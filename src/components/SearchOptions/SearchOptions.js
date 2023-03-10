import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import './SearchOptions.css'

const SearchOptions = ({ searchOptions, selectedOption, getSearchOption, selectedSearchOption, layoutType, getOculto, oculto }) => {

    const [moveRight, setMoveRight] = useState(true)
    const [moveLeft, setMoveLeft] = useState(false)
    const [movido, setMovido] = useState(false)

    const filterByType = (item) => {
        
        if (item.type === selectedOption) {
            return true;
        }

        return false;

    }

    const result = searchOptions.filter(filterByType);

    const filterByOption = (item) => {

        if (item.listType === selectedSearchOption && item.listTypeOptions) {
            return true;
        }

        return false;
            
    }

    const result2 = result[0].listOptions.filter(filterByOption)

    const moverDiv = (dir) => {
        const hola = document.querySelector('.searchoptions_div-div');
        if (hola) {
            if (dir === 'left') {
                hola.scrollBy({
                    top: 0,
                    left: -300,
                    behavior: 'smooth'
                })
            } else if (dir === 'right') {
                hola.scrollBy({
                    top: 0,
                    left: 300,
                    behavior: 'smooth'
                })
            }
        }
    }
    
    const movimientoX = () => {
        const hola = document.querySelector('.searchoptions_div-div')
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

        if (movido) {
            const hola = document.querySelector('.searchoptions_div-div')
            if (hola) {
                if (hola.scrollWidth <= 300) {
                    setMoveRight(false)
                } else if (hola.scrollWidth > 300) {
                    setMoveRight(true)
                }
            }
            setMovido(false)
        }

    }, [movido])

    useEffect(() => {

        const hola = document.querySelector('.searchoptions_div-div');
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

        <div 
            className='searchoptions_div'
        >

            <div 
                className='searchoptions_div-div'
                style={{
                    height: layoutType === 'hidden' ? '50px' : '70px'
                }}
                onScroll={() => {
                    movimientoX()
                }}
            >
                {result2.length <= 0 && result[0].listOptions.map((options) => {
                        return (
                            <div 
                                    className={`searchoptions_div-searchoption ${options.listType}`} 
                                    key={options.listType}
                                    style={{
                                        marginLeft: result[0].type === searchOptions[searchOptions.length - 1].type ? '0' : ''
                                    }}
                                    onClick={() => {
                                        getSearchOption(options.listType)
                                        if (layoutType === 'hidden') {
                                            getOculto(false)
                                        }
                                        setMovido(true)
                                    }}
                            >
                                <span>{options.listType}</span>
                            </div>
                        )
                    })
                }

                {result2.length > 0 && result2[0].listTypeOptions.map((option) => {
                        return (
                            <div 
                                className={`searchoptions_div-searchoption ${option}`} 
                                key={option}
                                style={{
                                    marginLeft: result[0].type === searchOptions[searchOptions.length - 1].type ? '0' : ''
                                }}
                                onClick={() => {
                                    getSearchOption(option)
                                    if (layoutType === 'hidden') {
                                        getOculto(false)
                                    }
                                    setMovido(true)
                                }}
                            >
                                <span>{option}</span>
                            </div>
                        )
                    })  
                }
            </div>

            {moveLeft && (
                    <div
                        onClick={() => {
                            moverDiv('left')
                        }}
                        className='searchoptions_div-move searchoptions_div-moveLeft'
                        style={{
                            top: layoutType === 'hidden' ? oculto ? '70px' : '114px' : '125px',
                        }}
                    >
                        <AiOutlineLeft />
                    </div>
            )}

            {moveRight && (
                    <div
                        onClick={() => {
                            moverDiv('right')
                        }}
                        className='searchoptions_div-move searchoptions_div-moveRight'
                        style={{
                            top: layoutType === 'hidden' ? oculto ? '70px' : '114px' : '125px',
                        }}
                    >
                        <AiOutlineRight />
                    </div>
            )}

        </div>

    )
  
}

export default SearchOptions