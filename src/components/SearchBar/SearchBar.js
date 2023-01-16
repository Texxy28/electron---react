import React from 'react'

import { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import { VscSettings } from 'react-icons/vsc'
import { IoMdClose } from 'react-icons/io'

import './SearchBar.css'

const SearchBar = ({ placeholder, searchOption, selectedOption, white, settings, getSearchOption }) => {

    const filterByType = (item) => {
        
        console.log(item)

        if (item.type === selectedOption) {
            return true;
        }

        return false;

    };

    const result = placeholder.filter(filterByType);

    const [toogleX, setToogleX] = useState(false);
    const [bordePadre, setBordePadre] = useState(false)
    const [selected, setSelected] = useState(false)
    const [first, setfirst] = useState(false)
    const [escrito, setEscrito] = useState(false)

    const eliminarValue = () => {
        const input = document.querySelector('.searchbar_div-input');
        input.value = '';
        setToogleX(false);
    }

    const selectInput = () => {
        const input = document.querySelector('.searchbar_div-input');
        input.focus();
    }

    const value = (change = true) => {
        const input = document.querySelector('.searchbar_div-input');
        const hola = document.querySelector('.searchbar_div');
        if (input.value.length === 0) {
            if (change) {
                hola.style.background = '#18191b'
            }
            return false
        } else if (input.value.length !== 0) {
            if (change) {
                hola.style.background = '#252627'
            }
            return true
        }
    }

    useEffect(() => {

        const hola = document.querySelector('.searchbar_div');
        const input = document.querySelector('.searchbar_div-input');

        if (hola) {
            const column = hola.style.gridTemplateColumns;
            const columns = column.split(/(?:)/)
            if (settings) {
                if (toogleX && columns[7] === '3') {
                    const num = parseInt(columns[7]) + 1;
                    hola.style.gridTemplateColumns = `repeat(${num},1fr)`  
                    input.style.width = '180px'  
                } else if (!toogleX && columns[7] === '4') {
                    const num = parseInt(columns[7]) - 1;
                    hola.style.gridTemplateColumns = `repeat(${num},1fr)` 
                    input.style.width = '220px'
                }
            } else if (!settings) {
                if (toogleX && columns[7] === '2') {
                    const num = parseInt(columns[7]) + 1;
                    hola.style.gridTemplateColumns = `repeat(${num},1fr)`  
                    input.style.width = '220px'  
                } else if (!toogleX && columns[7] === '3') {
                    const num = parseInt(columns[7]) - 1;
                    hola.style.gridTemplateColumns = `repeat(${num},1fr)` 
                    input.style.width = '260px'
                }
            }
        }

    }, [toogleX]);
    
    useEffect(() => {
      
        const hola = document.querySelector('.searchbar_div');
        if (bordePadre && hola) {
            if (value()) {
                hola.style.border = '1px solid #545556'
            } else {
                hola.style.border = '1px solid #8b3dff'
            }
        } else if (!bordePadre && hola) {
            if (value()) {
                hola.style.border = '1px solid #545556'
            } else {
                hola.style.border = '1px solid #424345'
            }
        }

    }, [bordePadre])

    useEffect(() => {

        const hola = document.querySelector('.searchbar_div')

        if (escrito && !selected) {
            hola.style.background = '#18191b'
            hola.style.border = '1px solid #424345'
        }

    }, [escrito])

    useEffect(() => {

        const hola = document.querySelector('.searchbar_div-input')

        if (hola) {
            hola.value = searchOption
            if (value(false)) {
                setToogleX(true)
            }
        }

    }, [searchOption])

    return (
        
        <div 
            className={`searchbar_div ${white ? 'white' : 'black'}`}
            style={{
                border: first && !selected && '1px solid #cfcfcf',
                gridTemplateColumns: settings === true ? 'repeat(3,1fr)' : 'repeat(2,1fr)'
            }} 
            onMouseEnter={
                () => {
                    setfirst(true)
                }
            }
            onMouseLeave={
                () => {
                    setfirst(false)
                }
            }
        >
            
            <div className='searchbar_div-searchicon' onClick={() => selectInput()}><BiSearch size={20} color='#d6d6d7' /></div>
            <input 
                className='searchbar_div-input'
                type='text' 
                placeholder={result[0].placeholder} 
                style={{
                    width: settings === true ? '220px' : '262px'
                }}
                onKeyUp={
                    () => {
                        if (!value()) {
                            setToogleX(false)
                            setBordePadre(true)
                        } else {
                            setToogleX(true)
                            setBordePadre(false)
                        }
                    }
                }
                onKeyDown={
                    () => {
                        if (!value()) {
                            setToogleX(false)
                            setBordePadre(true)
                        } else {
                            setToogleX(true)
                            setBordePadre(false)
                        }
                    }
                }
                onFocus={
                    () => {
                        setBordePadre(true)
                        setSelected(true)
                        setEscrito(false)
                    } 
                }
                onBlur={
                    () => {
                        setBordePadre(false)
                        setSelected(false)
                        setEscrito(true)
                    }
                }
            />

            {toogleX && <div 
                            className='searchbar_div-xicon' 
                            onClick={
                                () => {
                                    eliminarValue()
                                    selectInput()
                                    value()
                                    getSearchOption('')
                                }
                            }
                        >
                            <IoMdClose size={20} color='#d6d6d7' />
                        </div>
            }
            {settings && <div className='searchbar_div-settingsicon'><VscSettings size={20} color='#d6d6d7'/></div>}

        </div>
        
    )

}

export default SearchBar