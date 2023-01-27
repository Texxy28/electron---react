import React from 'react'

import './DesignResults.css'

const DesignResults = ({ selectedOption, searchOption, designResults }) => {

    const filterByType = (item) => {

        if (item.type === selectedOption) {
            return true;
        }

        return false;

    };

    const result = designResults.filter(filterByType);

    const filterByOption = (item) => {

        for (let index = 0; index < item.keyWords.length; index++) {
            const element = item.keyWords[index];
            if (element.includes(searchOption.toLowerCase())) {
                return true
            }
        }

        return false;
            
    }

    const result2 = result[0].listDesigns.filter(filterByOption)

    console.log(result2)

    return (
        
        <div className='designresults_div'>
        
            <div className='designresults_div-gridcontainer'>
                {result2.map((element) => {
                    return (
                        <div
                            key={element.rend}
                        >
                            {element.rend}
                        </div>
                    )
                })}

            </div>

        </div>
        
    )

}

export default DesignResults