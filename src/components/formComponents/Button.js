import React from 'react'

const Button = ( { classNameValue, nameAndType, textValue, isDisabled } ) => {
    return (
        <div 
            className="form-group col-lg-6 col-xs-6"
        >                        
            <button 
                className= { classNameValue }
                name= { nameAndType }
                type= { nameAndType }       
                disabled = { isDisabled }
            > { textValue }
            </button>

        </div>
    )
}

export default Button
