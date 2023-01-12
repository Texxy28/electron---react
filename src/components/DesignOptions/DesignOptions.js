import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

const DesignOptions = () => {

    return (

        <div className='designoptions_div'>
            
            <SearchBar 
                placeholder='Search Presentation templates'
                white={false}
                settings={true}
            />

        </div>

    )

}

export default DesignOptions