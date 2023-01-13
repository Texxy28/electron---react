import React from 'react'

import { BiSearch } from 'react-icons/bi'
import { VscSettings } from 'react-icons/vsc'

import './SearchBar.css'

const SearchBar = ({ placeholder, selectedOption, white, settings }) => {

    const filterByType = (item) => {
        
        if (item.type === selectedOption) {
            return true;
        }

        return false;

    }

    const result = placeholder.filter(filterByType)

    return (
        
        <div 
            className='searchbar_div'
            style={{
                background: white === true ? '#fff' : '#18191b',
                gridTemplateColumns: settings === true ? 'repeat(3, 1fr)' : 'repeat(2,1fr)'
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
            />

            {settings === true && <div className='searchbar_div-settingsicon'><VscSettings size={25} color='#d6d6d7'/></div>}

            

        </div>
        
    )

}

export default SearchBar