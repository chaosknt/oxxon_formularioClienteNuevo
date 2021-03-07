import React from 'react'

const Label = ( { text } ) => {
    return (
        <label 
            className="control-label requiredField"             
        >  { text }
            <span 
                className="base__asteriskField"
            >*
            </span>
        </label>
    )
}

export default Label
