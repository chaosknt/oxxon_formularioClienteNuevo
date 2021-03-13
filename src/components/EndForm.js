import React from 'react'

const EndForm = ( { title,
                    msg,
                    alertClassName,
                    buttonClassName,
                    buttonText,
                    buttonLink,                    
                 } ) => {
    return (
        <div className="container-fluid row animate__animated animate__zoomIn base__mainContent">

            <div className="col-md-12 col-sm-12 col-xs-12 base__mainEndForm">
                
                <h1 className = "text-center">{ title }</h1>              

                <div class = { alertClassName } role="alert">
                    { msg }
                </div>               

                <p className = "text-center" >
                     <a
                         href = { buttonLink } 
                         className = { buttonClassName }
                     > { buttonText } 
                     </a>
                </p>

            </div>

        </div>
    )
}

export default EndForm
