import React, { useState } from 'react'
import localidades from '../data/localidades';
import Select from 'react-select'

const FormEntrega = ({   direccion,                          
                         entre_calles, 
                         setFormEntrega, 
                         localidad,
                         updateLocalidad,                         
                         handleForm                         
                    }) => {
    
    
    const [showError, setShowError] = useState({
        hasError: false,
        showErrMsg:''
    });

    const [isDisabled, setIsDisabled] = useState(true)

    const handleDisableButton = () => {
        setIsDisabled(!isDisabled);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( isFormValid() )
        {
            handleForm();
        }        
        
    }
   
    const isFormValid = () => {

        if( direccion.trim().length < 5 )
        {
          setShowError({...showError, hasError:true, showErrMsg:"Ha ingresado una dirección incorrecta."});
              return false;
        }
        
        if( localidad.localidad === -1 || localidad.localidad === "Seleccione una Localidad")
        {
            setShowError({...showError, hasError:true, showErrMsg:"Seleccione una localidad."});
            return false;
        }
        if( entre_calles.trim().length < 3 )
        {
          setShowError({...showError, hasError:true, showErrMsg:"Por favor ingrese entre calles."});
          return false;
        }
        
        return true;
    } 
  
    return (
  <div className="container-fluid row animate__animated animate__zoomIn base__mainContent">
   <div className="col-md-12 col-sm-12 col-xs-12">

      <form onSubmit = { handleSubmit }>               
        <h3 
            className="base__formTittle"
        >Datos de Entrega
        </h3>

        <hr 
            className="base__hr"
        />

        {showError.hasError && 
            <div class="alert alert-danger text-center" role="alert">
                    {showError.showErrMsg}
            </div>
        }
                
        <div 
            className="form-group col-lg-6"
        >
        
            <label 
                className="control-label requiredField" 
                htmlFor="direccion"
                >Direcci&oacute;n

                <span
                    className="base__asteriskField"
                >*
                </span>
             </label>

            <input 
                className="form-control" 
                id="direccion"
                name="direccion" 
                placeholder="Calle, altura, piso, dpto" 
                type="text"
                value = { direccion }
                onChange = { setFormEntrega }
            />
            
            <span 
                className="help-block" 
                id="hint_text1"
            >Ingrese s&uacute; direccion completa.
            </span>
           

        </div>        

        <div
             className="form-group col-lg-6"
        >

            <label 
                className="control-label requiredField" 
                htmlFor="localidad"
                >Seleccione una opci&oacute;n

                <span 
                    className="base__asteriskField"
                >*
                </span>        
            </label>
           
            
                          <Select 
                          isLoading={true}
                          placeholder = "Seleccione o busque una Localidad"
                          options={localidades}                           
                          id="localidad" 
                          name="localidad"
                          onChange = { updateLocalidad }
                          />
            
           
            </div>

            <div 
                className="form-group col-lg-12"
            >
            <label 
                className="control-label requiredField" 
                htmlFor="entre_calles"
                >Entre calles

                <span 
                    className="base__asteriskField"
                >*
                </span>
            </label>

            <input 
                className="form-control" 
                id="entre_calles" 
                name="entre_calles"
                placeholder="Entre calles" 
                type="text"
                value = { entre_calles }
                onChange = { setFormEntrega }
            />

            <span 
                className="help-block" 
                id="hint_entre_calles"
            >Ingrese las entre calles y/o  una referencia.
            </span>

        </div>
        
        
        <div className="form-group col-lg-12">
        
            <div class="form-check">

            <input 
                type="checkbox" 
                className="form-check-input" 
                id="exampleCheck1"   
                onClick = { handleDisableButton }   
                
                  
            />

            <label 
                className="form-check-label" 
                htmlFor="exampleCheck1"
            >   Acepto los <a href="#"> Términos y Condiciones </a> y autorizo el uso de mis datos
             de acuerdo a la <a href="#"> Declaración de Privacidad.</a>            
            </label>

            </div>
        
        </div>
        
        <div className="form-group col-lg-6 col-xs-6 pull-right" />

        <div 
            className="form-group col-lg-6 col-xs-6"
        >
        
            <button 
                className="btn btn-danger  btn-block" 
                name="submit" 
                type="submit"
                disabled = { isDisabled }                
            >Enviar
            </button>
       
        </div>

     </form>
   </div>
  </div>
    )
}

export default FormEntrega
