import React from 'react'
import { useState } from 'react'

import SearchBar from '../SearchBar/SearchBar'
import SearchOptions from '../SearchOptions/SearchOptions'
import OptionsMenu from '../OptionsMenu/OptionsMenu'

const ElementsOptions = () => {

    const options = [
        'All',
        'Graphics',
        'Photos'
    ]

    const [selectedOption, setSelectedOption] = useState(options[0])
    const [searchOption, setSearchOption] = useState('')
    const [oculto, setOculto] = useState(true);

    const searchOptions = [
        {
            type: 'All',
            listOptions: [
                {
                    listType: 'Arrow',
                    listTypeOptions: [
                        'Arrow1',
                        'Arrow2',
                        'Arrow3'
                    ]
                },
                {
                    listType: 'Line',
                    listTypeOptions: [
                        'Line1',
                        'Line2',
                        'Line3'
                    ]
                },
                {
                    listType: 'Circle',
                    listTypeOptions: [
                        'Circle1',
                        'Circle2',
                        'Circle3'
                    ]
                }
            ]
        },
        {
            type: 'Graphics',
            listOptions: [
                {
                    listType: 'Arrow',
                    listTypeOptions: [
                        'graphArrow1',
                        'graphArrow2',
                        'graphArrow3'
                    ]
                },
                {
                    listType: 'Circle',
                    listTypeOptions: [
                        'graphCircle1',
                        'graphCircle2',
                        'graphCircle3'
                    ]
                },
                {
                    listType: 'Line',
                    listTypeOptions: [
                        'graphLine1',
                        'graphLine2',
                        'graphLine3'
                    ]
                },
            ]
        },
        {
            type: 'Photos',
            listOptions: [
                {
                    listType: 'Arrow',
                    listTypeOptions: [
                        'photosArrow1',
                        'photosArrow2',
                        'photosArrow3'
                    ]
                },
                {
                    listType: 'Circle',
                    listTypeOptions: [
                        'photosCircle1',
                        'photosCircle2',
                        'photosCircle3'
                    ]
                },
                {
                    listType: 'Line',
                    listTypeOptions: [
                        'photosLine1',
                        'photosLine2',
                        'photosLine3'
                    ]
                },
            ]
        }
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

    const getOption = (option) => {
        setSelectedOption(option)
    }

    const getSearchOption = (option) => {
        setSearchOption(option)
    }

    const getOculto = (des) => {
        setOculto(des)
    }

    return (

        <div className='elementsoptions_div'>

            <SearchBar
                placeholder={searchPlaceholders}
                selectedOption={selectedOption}
                searchOption={searchOption}
                white={false}
                settings={false}
                getSearchOption={getSearchOption}
                getOculto={getOculto}
                oculto={oculto}
                layoutType={'hidden'}
            />

            <OptionsMenu 
                options={options}
                getOption={getOption}
                layoutType={'hidden'}
                searchOption={searchOption}
                oculto={oculto}
            />

            <SearchOptions 
                selectedSearchOption={searchOption}
                searchOptions={searchOptions}
                selectedOption={selectedOption}
                getSearchOption={getSearchOption}
                layoutType={'hidden'}
                getOculto={getOculto}
                oculto={oculto}
            />

        </div>

    )

}

export default ElementsOptions