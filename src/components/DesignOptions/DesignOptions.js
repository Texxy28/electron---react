import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import OptionsMenu from '../OptionsMenu/OptionsMenu'

const DesignOptions = () => {

    const options = [
        'Template',
        'Layout',
        'Styles'
    ]

    return (

        <div className='designoptions_div'>
            
            <SearchBar 
                placeholder='Search Presentation templates'
                white={false}
                settings={true}
            />

            <OptionsMenu 
                options={options}
            />

        </div>

    )

}

export default DesignOptions