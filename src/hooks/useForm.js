import { useState } from "react"

export const useForm = ( initialState = {}) => {
 
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ( {target} ) => {       
        
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    const handleInputChangeF = ( {name, value} ) => {        
        //console.log(prop)
        //esta funcion sirve para usar select2
        setValues({
            ...values,
            [ name ]: value
        });
    }


    return [ values, handleInputChange, reset ];
}
