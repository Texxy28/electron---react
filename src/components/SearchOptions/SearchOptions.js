import React from 'react'
import { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import './SearchOptions.css'

const SearchOptions = ({ searchOptions, selectedOption, getSearchOption, selectedSearchOption }) => {

    const [moveRight, setMoveRight] = useState(true)
    const [moveLeft, setMoveLeft] = useState(false)

    const filterByType = (item) => {
        
        if (item.type === selectedOption) {
            return true;
        }

        return false;

    }

    const result = searchOptions.filter(filterByType);

    const filterByOption = (item) => {

        if (item.listType === selectedSearchOption) {
            console.log(item, selectedSearchOption)
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

    const setValue = (option) => {
        getSearchOption(option)
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

    console.log(result)

    return (

        <div className='searchoptions_div'>

            <div 
                className='searchoptions_div-div'
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
                                        setValue(options.listType)
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
                                    setValue(option)
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
                >
                    <AiOutlineRight />
                </div>
            )}

        </div>

    )
  
}

export default SearchOptions