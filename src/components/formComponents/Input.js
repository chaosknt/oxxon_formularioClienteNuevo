import React from 'react'
import Label from './Label'

const Input = ({ idValue, placeholderValue, typeValue, inputValue, onChangeFunction}) => {
    return (
      
        <div className="form-group col-lg-6">   

            <Label
                    text = { idValue }
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

        </div> 

    )
}

export default Input
