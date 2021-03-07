import React from 'react'
import Label from './Label'
import Span from './Span'

const Input = ({ idValue, placeholderValue, typeValue, inputValue, onChangeFunction, textSpan, labelValue}) => {
    return (
      
        <div className="form-group col-lg-6">   

            <Label
                    text = { labelValue }
            />

            <input 

                className="form-control"
                id= { idValue }
                name= { idValue  }
                placeholder= { placeholderValue }
                type= { typeValue }
                value = { inputValue }
                onChange = { onChangeFunction }
            
            />

            <Span text = { textSpan } />

        </div> 

    )
}

export default Input
