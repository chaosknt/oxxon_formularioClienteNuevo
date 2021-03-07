import React from 'react'
import Label from './Label'

const Select = ({ idValue, inputValue, onChangeFunction, selectValues, selectValueCondition }) => {
    return (

        <div 
        className="form-group col-lg-6"
        >
            <Label 
                 text = { "Seleccione una opción" }
            />            

        <select 
            className="select form-control" 
            id = { idValue } 
            name = { idValue }
            value = { inputValue }
            onChange = { onChangeFunction }
        >
            {
                selectValues.map(selectValue => ( 

                    <option value = 
                        { selectValue === selectValueCondition ? 
                                            '' :
                                            selectValue 
                        }>

                        { selectValue }
                    </option>

                    )) 
            }
                        
        </select>
        
    </div>

    )
}

export default Select
