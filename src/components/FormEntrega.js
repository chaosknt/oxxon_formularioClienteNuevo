import React, { useState } from 'react'
import localidades from '../data/localidades';
import Select from 'react-select'
import { errMsg } from '../strings/errMsg';
import Title from './formComponents/Title';
import { titles } from '../strings/titles';
import Label from './formComponents/Label';
import Input from './formComponents/Input';
import Button from './formComponents/Button';

const FormEntrega = ({   direccion,                          
                         entre_calles, 
                         setFormEntrega, 
                         localidad,
                         updateLocalidad,                         
                         handleForm                         
                    }) => {
    
    
    const [showError, setShowError] = useState( {hasError: false, showErrMsg:''} );

    const {err_direccion, err_localidad, err_entre_calles} = errMsg;

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
          setShowError( {...showError, hasError:true, showErrMsg: err_direccion } );
              return false;
        }
        
        if( localidad.localidad === -1 || localidad.localidad === "Seleccione una Localidad")
        {
            setShowError( {...showError, hasError:true, showErrMsg: err_localidad} );
            return false;
        }
        if( entre_calles.trim().length < 3 )
        {
          setShowError( {...showError, hasError:true, showErrMsg: err_entre_calles} );
          return false;
        }
        
        return true;
    } 
  
    return (

    <div className="container-fluid row animate__animated animate__zoomIn base__mainContent">
        <div className="col-md-12 col-sm-12 col-xs-12">

        <form onSubmit = { handleSubmit }>             
           
            <Title text = { titles.Entrega}/>

            {showError.hasError && 
                <div class="alert alert-danger text-center" role="alert">
                        {showError.showErrMsg}
                </div>
            }
                    
          
            <Input 

                idValue = { "direccion"  }    
                labelValue = { "Dirección" }
                placeholderValue = { "Calle, altura, piso, dpto"  }
                typeValue = { "text" }
                inputValue = { direccion }
                onChangeFunction = { setFormEntrega }    
                        
            />     

             {/* Select with Search  */}
            <div
                className="form-group col-lg-6"
            >              
                <Label text = "Seleccione una opción" />
            
                
                <Select 
                    isLoading={true}
                    placeholder = "Seleccione o busque una Localidad"
                    options={localidades}                           
                    id="localidad" 
                    name="localidad"
                    onChange = { updateLocalidad }
                />
                
            
            </div>                

            <Input 

                idValue = { "entre_calles"  }                           
                placeholderValue = { "Entre calles"  }
                labelValue = { "Entre calles" }
                typeValue = { "text" }
                inputValue = { entre_calles }
                onChangeFunction = { setFormEntrega } 
                textSpan = { "Ingrese las entre calles y/o  una referencia." }   
                    
            />
            
            
            <div className="form-group col-lg-12">
            
                <div class="form-check">

                <input 
                    type="checkbox" 
                    className="form-check-input"                     
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
            
            <div className="form-group col-lg-6 col-xs-6" />

                      
                <Button

                    classNameValue = { "btn btn-danger btn-block pull-right" }
                    nameAndType = { "submit" }
                    textValue = { "Enviar" }
                    isDisabled = { isDisabled }

                />  

        
            

        </form>

   </div>

  </div>

    )
}

export default FormEntrega
