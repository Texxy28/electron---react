import React from 'react'
import { useState } from 'react'

import SearchBar from '../SearchBar/SearchBar'

const ElementsOptions = () => {

    const options = [
        'All',
        'Graphics',
        'Photos'
    ]

    const [selectedOption, setSelectedOption] = useState(options[0])

    const searchOptions = [
        
    ]

    const searchPlaceholders = [
        {
            type: 'All',
            placeholder: 'Search anything from Canva'
        },
        {
            type: 'Graphics',
            placeholder: 'Search Canva graphics'
        },
        {
            type: 'Photos',
            placeholder: 'Search Canva photos'
        }
    ]

    return (

        <div className='elementsoptions_div'>

            <SearchBar
                placeholder={searchPlaceholders}
                selectedOption={selectedOption}
                white={false}
                settings={false}
            />

            <SearchOptions 
                searchOptions={searchOptions}
                selectedOption={selectedOption}
            />

        </div>

    )

}

export default ElementsOptions