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
                {
                    listType: 'Green',
                    listTypeOptions: [
                        'Green1',
                        'Green2',
                        'Green3'
                    ]
                },
                {
                    listType: 'Food',
                    listTypeOptions: [
                        'Food1',
                        'Food2',
                        'Food3'
                    ]
                },
                {
                    listType: 'School',
                    listTypeOptions: [
                        'School1',
                        'School2',
                        'School3'
                    ]
                },
                {
                    listType: 'New year',
                    listTypeOptions: [
                        'New year1',
                        'New year2',
                        'New year3'
                    ]
                },
                {
                    listType: 'Timeline',
                    listTypeOptions: [
                        'Timeline1',
                        'Timeline2',
                        'Timeline3'
                    ]
                },
                {
                    listType: 'Simple',
                    listTypeOptions: [
                        'Simple1',
                        'Simple2',
                        'Simple3'
                    ]
                },
                {
                    listType: 'Pink',
                    listTypeOptions: [
                        'Pink1',
                        'Pink2',
                        'Pink3'
                    ]
                },
                {
                    listType: 'Red',
                    listTypeOptions: [
                        'Red1',
                        'Red2',
                        'Red3'
                    ]
                },
                {
                    listType: 'Music',
                    listTypeOptions: [
                        'Music1',
                        'Music2',
                        'Music3'
                    ]
                },
                {
                    listType: 'Math',
                    listTypeOptions: [
                        'Math1',
                        'Math2',
                        'Math3'
                    ]
                },
                {
                    listType: 'Travel',
                    listTypeOptions: [
                        'Travel1',
                        'Travel2',
                        'Travel3'
                    ]
                },
                {
                    listType: 'Minimalist',
                    listTypeOptions: [
                        'Minimalist1',
                        'Minimalist2',
                        'Minimalist3'
                    ]
                },
                {
                    listType: 'Technology',
                    listTypeOptions: [
                        'Technology1',
                        'Technology2',
                        'Technology3'
                    ]
                },
                {
                    listType: 'Cute',
                    listTypeOptions: [
                        'Cute1',
                        'Cute2',
                        'Cute3'
                    ]
                },
                {
                    listType: 'Nature',
                    listTypeOptions: [
                        'Nature1',
                        'Nature2',
                        'Nature3'
                    ]
                },
                {
                    listType: 'Black',
                    listTypeOptions: [
                        'Black1',
                        'Black2',
                        'Black3'
                    ]
                },
                {
                    listType: 'Thank you',
                    listTypeOptions: [
                        'Thank you1',
                        'Thank you2',
                        'Thank you3'
                    ]
                },
                {
                    listType: 'Art',
                    listTypeOptions: [
                        'Art1',
                        'Art2',
                        'Art3'
                    ]
                },
                {
                    listType: 'Health',
                    listTypeOptions: [
                        'Health1',
                        'Health2',
                        'Health3'
                    ]
                },
                {
                    listType: 'Winter',
                    listTypeOptions: [
                        'Winter1',
                        'Winter2',
                        'Winter3'
                    ]
                },
                {
                    listType: 'Computer',
                    listTypeOptions: [
                        'Computer1',
                        'Computer2',
                        'Computer3'
                    ]
                },
                {
                    listType: 'Education',
                    listTypeOptions: [
                        'Education1',
                        'Education2',
                        'Education3'
                    ]
                },
                {
                    listType: 'Chart',
                    listTypeOptions: [
                        'Chart1',
                        'Chart2',
                        'Chart3'
                    ]
                },
                {
                    listType: 'Game',
                    listTypeOptions: [
                        'Game1',
                        'Game2',
                        'Game3'
                    ]
                },
                {
                    listType: 'Christmas',
                    listTypeOptions: [
                        'Christmas1',
                        'Christmas2',
                        'Christmas3'
                    ]
                },
                {
                    listType: 'Marketing',
                    listTypeOptions: [
                        'Marketing1',
                        'Marketing2',
                        'Marketing3'
                    ]
                }
            ]
        },
        {
            type: 'Layout',
            listOptions: [
                {
                    listType: 'History',
                    listTypeOptions: [
                        'layoutHistory1',
                        'layoutHistory2',
                        'layoutHistory3'
                    ]
                }
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
                layoutType={'normal'}
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