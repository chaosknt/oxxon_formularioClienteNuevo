import React, { useState } from 'react'
import isEmail from 'validator/lib/isEmail';

import { errMsg } from '../strings/errMsg';
import { titles } from '../strings/titles';

import Button from './formComponents/Button';
import Input from './formComponents/Input';
import Title from './formComponents/Title';


const FormContacto = ({ email,
                        telefono, 
                        setFormContacto,                       
                        setContact, 
                        setDelivery 
                      }) => {
    
    const [showError, setShowError] = useState( { hasError: false, showErrMsg:''} );

    const { err_email, err_telefono } = errMsg

    const handleNext = ( e ) => {
        e.preventDefault();
        if( isFormValid() )
        {
          setContact(false);
          setDelivery(true);
        }
        
    }
       
    const isFormValid = () => {

      if( !isEmail(email) )
      {
        setShowError( {...showError, hasError:true, showErrMsg: err_email } );
            return false;
      }

      if( telefono.length < 8 )
      {
        setShowError( {...showError, hasError:true, showErrMsg: err_telefono } );
            return false;
      }
          
      return true;
  }  

    return (

    <div className="container-fluid row animate__animated animate__zoomIn base__mainContent">
      
      <div className="col-md-12 col-sm-12 col-xs-12">
     
        <form onSubmit = { handleNext }>  
        <Title text = { titles.Contacto } />            
        
        {showError.hasError && 
            <div class="alert alert-danger text-center" role="alert">
                    {showError.showErrMsg}
            </div>
        }        
        
        <Input

            idValue = { "email"  }                           
            placeholderValue = { "example@domain.com"  }
            labelValue = { "Email"}
            typeValue = { "email" }
            inputValue = { email }
            onChangeFunction = { setFormContacto }    
            textSpan = { "Ingrese un email al que tenga acceso para realizar la verificación." }

        />  

        <Input

            idValue = { "telefono"  }                           
            placeholderValue = { "Ingrese su teléfono de contacto"  }
            labelValue = { "Teléfono"}
            typeValue = { "number" }
            inputValue = { telefono }
            onChangeFunction = { setFormContacto }    
            textSpan = { "Ingrese una linea que este activa." }
        />
        
        {/* keeps the button bellow to the right  */}
        <div className="form-group col-lg-6 col-xs-6" />

        <Button

          classNameValue = { "btn btn-danger btn-block" }
          nameAndType = { "submit" }
          textValue = { "Siguiente" }
          isDisabled = { isFormValid }

        />        

      </form>

    </div>
    
  </div>
    )
}

export default FormContacto
