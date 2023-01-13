import React from 'react'
import { useState } from 'react'

import SearchBar from '../SearchBar/SearchBar'
import OptionsMenu from '../OptionsMenu/OptionsMenu'
import SearchOptions from '../SearchOptions/SearchOptions'

const DesignOptions = () => {

    const options = [
        'Template',
        'Layout',
        'Styles'
    ]

    const searchOptions = [
        {
            type: 'Template',
            listOptions: [
                'History',
                'Science',
                'Blue',
                'Business',
                'Green',
                'Food',
                'School',
                'New year',
                'Timeline',
                'Simple',
                'Pink',
                'Red',
                'Music',
                'Math',
                'Travel',
                'Minimalist',
                'Technology',
                'Cute',
                'Nature',
                'Black',
                'Thank you',
                'Art',
                'Health',
                'Winter',
                'Computer',
                'Education',
                'Chart',
                'Game',
                'Christmas',
                'Marketing'
            ]
        },
        {
            type: 'Layout',
            listOptions: [

            ]
        },
        {
            type: 'Styles',
            listOptions: [

            ]
        }
    ]

    const searchPlaceholders = [
        {
            type: 'Template',
            placeholder: 'Search Presentation templates'
        },
        {
            type: 'Layout',
            placeholder: 'Search Presentation layouts'
        },
        {
            type: 'Styles',
            placeholder: 'Search styles'
        }
    ]

    const [selectedOption, setSelectedOption] = useState(options[0])

    const getOption = (option) => {
        setSelectedOption(option)
    }

    return (

        <div className='designoptions_div'>
            
            <SearchBar 
                placeholder={searchPlaceholders}
                selectedOption={selectedOption}
                white={false}
                settings={false}
            />

            <OptionsMenu 
                options={options}
                getOption={getOption}
            />

            <SearchOptions 
                searchOptions={searchOptions}
                selectedOption={selectedOption}
            />

        </div>

    )

}

export default DesignOptions