import React from 'react'

import './SearchOptions.css'

const SearchOptions = ({ searchOptions, selectedOption }) => {

    const filterByType = (item) => {
        
        if (item.type === selectedOption) {
            return true;
        }

        return false;

    }

    const result = searchOptions.filter(filterByType)

    return (

        <div className='searchoptions_div'>

            {result && result[0].listOptions.map((option) => {
                return (
                    <div 
                        className={`searchoptions_div-searchoption ${option}`} 
                        key={option}
                        style={{
                            marginLeft: result[0].type === searchOptions[searchOptions.length - 1].type ? '0' : ''
                        }}
                    >
                        <span>{option}</span>
                    </div>
                )
            })}

        </div>

    )
  
}

export default SearchOptions