import React from 'react'
import { useState } from 'react'

import SearchBar from '../SearchBar/SearchBar'
import SearchOptions from '../SearchOptions/SearchOptions'
import OptionsMenu from '../OptionsMenu/OptionsMenu'

const ElementsOptions = () => {

    const options = [
        'All',
        'Graphics',
        'Photos',
        'Videos',
        'Audio',
        'Frames',
        'Chart'
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
        },
        {
            type: 'Videos',
            listOptions: [
                {
                    listType: 'Arrow',
                    listTypeOptions: [
                        'videosArrow1',
                        'videosArrow2',
                        'videosArrow3'
                    ]
                },
                {
                    listType: 'Circle',
                    listTypeOptions: [
                        'videosCircle1',
                        'videosCircle2',
                        'videosCircle3'
                    ]
                },
                {
                    listType: 'Line',
                    listTypeOptions: [
                        'videosLine1',
                        'videosLine2',
                        'videosLine3'
                    ]
                },
            ]
        },
        {
            type: 'Audio',
            listOptions: [
                {
                    listType: 'Arrow',
                    listTypeOptions: [
                        'audioArrow1',
                        'audioArrow2',
                        'audioArrow3'
                    ]
                },
                {
                    listType: 'Circle',
                    listTypeOptions: [
                        'audioCircle1',
                        'audioCircle2',
                        'audioCircle3'
                    ]
                },
                {
                    listType: 'Line',
                    listTypeOptions: [
                        'audioLine1',
                        'audioLine2',
                        'audioLine3'
                    ]
                },
            ]
        },
        {
            type: 'Frames',
            listOptions: [
                {
                    listType: 'Arrow',
                    listTypeOptions: [
                        'framesArrow1',
                        'framesArrow2',
                        'framesArrow3'
                    ]
                },
                {
                    listType: 'Circle',
                    listTypeOptions: [
                        'framesCircle1',
                        'framesCircle2',
                        'framesCircle3'
                    ]
                },
                {
                    listType: 'Line',
                    listTypeOptions: [
                        'framesLine1',
                        'framesLine2',
                        'framesLine3'
                    ]
                },
            ]
        },
        {
            type: 'Chart',
            listOptions: [
                {
                    listType: 'Arrow',
                    listTypeOptions: [
                        'chartArrow1',
                        'chartArrow2',
                        'chartArrow3'
                    ]
                },
                {
                    listType: 'Circle',
                    listTypeOptions: [
                        'chartCircle1',
                        'chartCircle2',
                        'chartCircle3'
                    ]
                },
                {
                    listType: 'Line',
                    listTypeOptions: [
                        'chartLine1',
                        'chartLine2',
                        'chartLine3'
                    ]
                },
            ]
        },
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
        },
        {
            type: 'Videos',
            placeholder: 'Search Canva photos'
        },
        {
            type: 'Audio',
            placeholder: 'Search Canva photos'
        },
        {
            type: 'Frames',
            placeholder: 'Search Canva photos'
        },
        {
            type: 'Chart',
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