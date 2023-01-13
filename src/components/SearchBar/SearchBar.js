import React from 'react'

import { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import { VscSettings } from 'react-icons/vsc'
import { IoMdClose } from 'react-icons/io'

import './SearchBar.css'

const SearchBar = ({ placeholder, selectedOption, white, settings }) => {

    const filterByType = (item) => {
        
        if (item.type === selectedOption) {
            return true;
        }

        return false;

    };

    const result = placeholder.filter(filterByType);

    const [toogleX, setToogleX] = useState(false);
    const [bordePadre, setBordePadre] = useState(false)

    const eliminarValue = () => {
        const input = document.querySelector('.searchbar_div-input');
        input.value = '';
        setToogleX(false);
    }

    const value = () => {
        const input = document.querySelector('.searchbar_div-input');
        if (input.value.length === 0) {
            setToogleX(false)
            setBordePadre(true)
        } else if (input.value.length !== 0) {
            setToogleX(true)
            setBordePadre(false)
        }
    }

    useEffect(() => {
        const div = document.querySelector('.searchbar_div');
        if (bordePadre) {
            div.style.border = '#8b3dff solid 1px'
        } else if (!bordePadre) {
            div.style.border = '#424345 solid 1px'
        }
    }, [bordePadre])
    

    useEffect(() => {

        const hola = document.querySelector('.searchbar_div');
        const input = document.querySelector('.searchbar_div-input');

        if (hola) {
            const column = hola.style.gridTemplateColumns;
            const columns = column.split(/(?:)/)
            if (toogleX && columns[7] === '3') {
                const num = parseInt(columns[7]) + 1;
                hola.style.gridTemplateColumns = `repeat(${num},1fr)`  
                input.style.width = '180px'  
            } else if (!toogleX && columns[7] === '4') {
                const num = parseInt(columns[7]) - 1;
                hola.style.gridTemplateColumns = `repeat(${num},1fr)` 
                input.style.width = '220px'
            }
        }

    }, [toogleX]);
    

    return (
        
        <div 
            className='searchbar_div'
            style={{
                background: white === true ? '#fff' : '#18191b',
                gridTemplateColumns: settings === true ? 'repeat(3,1fr)' : 'repeat(2,1fr)'
            }} 
        >
            
            <div className='searchbar_div-searchicon'><BiSearch size={25} color='#d6d6d7' /></div>
            <input 
                className='searchbar_div-input' 
                type='text' 
                placeholder={result[0].placeholder} 
                style={{
                    width: settings === true ? '220px' : '262px'
                }}
                onKeyUp={
                    () => {
                        value()
                    }
                }
                onFocus={
                    () => {
                        value()
                        setBordePadre(true)
                    } 
                }
                onBlur={
                    () => {
                        value()
                        setBordePadre(false)
                    }
                }
            />

            {toogleX && <div className='searchbar_div-xicon' onClick={() => eliminarValue()}><IoMdClose size={25} color='#d6d6d7' /></div>}
            {settings && <div className='searchbar_div-settingsicon'><VscSettings size={25} color='#d6d6d7'/></div>}

        </div>
        
    )

}

export default SearchBar