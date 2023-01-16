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
                {
                    listType: 'History',
                    listTypeOptions: [
                        'History1',
                        'History2',
                        'History3'
                    ]
                },
                {
                    listType: 'Sciense',
                    listTypeOptions: [
                        'Sciense1',
                        'Sciense2',
                        'Sciense3'
                    ]
                },
                {
                    listType: 'Blue',
                    listTypeOptions: [
                        'Blue1',
                        'Blue2',
                        'Blue3'
                    ]
                },
                {
                    listType: 'Business',
                    listTypeOptions: [
                        'Business1',
                        'Business2',
                        'Business3'
                    ]
                },
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
    const [searchOption, setSearchOption] = useState('')
    
    const getOption = (option) => {
        setSelectedOption(option)
    }

    const getSearchOption = (option) => {
        setSearchOption(option)
    }

    console.log(searchOption)

    return (

        <div className='designoptions_div'>
            
            <SearchBar 
                placeholder={searchPlaceholders}
                selectedOption={selectedOption}
                searchOption={searchOption}
                white={false}
                settings={true}
                getSearchOption={getSearchOption}
            />

            <OptionsMenu 
                options={options}
                getOption={getOption}
            />

            <SearchOptions 
                searchOptions={searchOptions}
                selectedSearchOption={searchOption}
                selectedOption={selectedOption}
                getSearchOption={getSearchOption}
            />

        </div>

    )

}

export default DesignOptions