import React from 'react'

import { BiSearch } from 'react-icons/bi'
import { VscSettings } from 'react-icons/vsc'

import './SearchBar.css'

const SearchBar = ({ placeholder, white, settings }) => {

    return (
        
        <div 
            className='searchbar_div'
            style={{
                background: white === true ? '#fff' : '#18191b' 
            }} 
        >
            
            <BiSearch size={25} color='#d6d6d7' />
            <input 
                className='searchbar_div-input' 
                type='text' 
                placeholder={placeholder} 
            />

            {settings === true && <VscSettings size={25} color='#d6d6d7'/>}

            

        </div>
        
    )

}

export default SearchBar