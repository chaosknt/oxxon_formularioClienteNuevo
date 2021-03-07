import React from 'react'

const Title = ( { text } ) => {
    return (
        <>
            <h3 className="base__formTittle"> { text } </h3>
            <hr className="base__hr" />  
        </>
    )
}

export default Title
