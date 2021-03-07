import React, { useState } from 'react'
import isEmail from 'validator/lib/isEmail';
const FormContacto = ({ email,
                        telefono, 
                        setFormContacto,                       
                        setContact, 
                        setDelivery 
                      }) => {
    
    const [showError, setShowError] = useState({
      hasError: false,
      showErrMsg:''
    });

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
        setShowError({...showError, hasError:true, showErrMsg:"Ha ingresado un email no válido."});
            return false;
      }

      if( telefono.length < 8 )
      {
        setShowError({...showError, hasError:true, showErrMsg:"Ha ingresado un teléfono no válido."});
            return false;
      }
          
      return true;
  }  

    return (
<div className="container-fluid row animate__animated animate__zoomIn base__mainContent">
   <div className="col-md-12 col-sm-12 col-xs-12">
     
        <form onSubmit = { handleNext }>                
        <h3 className="base__formTittle">Datos de Contacto</h3>
        <hr className="base__hr"></hr>

        {showError.hasError && 
                            <div class="alert alert-danger text-center" role="alert">
                                    {showError.showErrMsg}
                            </div>
        }
        
        <div className="form-group col-lg-6">

            <label 
                className="control-label requiredField" 
                htmlFor = "email"
              >Email
              <span 
                className="base__base__asteriskField"
              >*
              </span>
            </label>

            <input 
              className="form-control" 
              id="email" 
              name="email"
              placeholder="example@domain.com"
              type="email"
              value = { email }
              onChange = { setFormContacto }
            />

            <span 
              className="help-block"
              id="hint_number"
            > Ingrese un email al que tenga acceso para realizar la verificación.
            </span>

        </div>

        <div className="form-group col-lg-6">

            <label 
                className="control-label requiredField" 
                htmlFor="telefono"
              >Tel&eacute;fono# 
              <span 
                className="base__asteriskField"
              >*
              </span>        
            </label>

            <input 
              className="form-control" 
              id="telefono"
              name="telefono"
              placeholder="Ingrese su tel&eacute;fono de contacto"
              type="number"
              value = { telefono }
              onChange = { setFormContacto }

            />

            <span 
              className="help-block" 
              id="hint_number"
            >Ingrese una linea que este activa.
            </span>

        </div>
        <div className="form-group col-lg-6 col-xs-6 pull-right" />
          
        <div 
            className="form-group col-lg-6 col-xs-6 pull-right"
          >      

          <button 
              className="btn btn-danger  btn-block"
              name="submit" 
              type="submit"
              disabled = { isFormValid }
          >Siguiente
          </button>

        </div>

      </form>
  </div>
</div>
    )
}

export default FormContacto
