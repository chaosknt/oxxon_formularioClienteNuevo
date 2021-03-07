import React, { useState } from 'react'

import condicionVenta from '../data/condicionVenta';
import rubros from '../data/rubro';
import { errMsg } from '../strings/errMsg';

import Select from 'react-select'
import InputMask from "react-input-mask";

import Input from './formComponents/Input';
import Select2 from './formComponents/Select';
import Label from './formComponents/Label';
import Button from './formComponents/Button';
import Span from './formComponents/Span';
import Title from './formComponents/Title';
import { titles } from '../strings/titles';

const FormNegocio = ({ razon_social, 
                       condicion_venta,
                       cuit,        
                       rubro,               
                       updateRubro,
                       setFormNegocio,                       
                       setBusiness, 
                       setContact
                    }) => {

    const [showError, setShowError] = useState( { hasError: false, showErrMsg:''} );

    const { err_razon_social, err_condicion_venta, err_cuit, err_rubro } = errMsg;

    const handleNext = ( e ) => {
        
        e.preventDefault();       
        if( isFormValid() )
        {
            setBusiness(false);
            setContact(true);
        }
        return;
        
    }  
             
    const isFormValid = () => {

        if(razon_social.trim().length === 0)
        {
            setShowError( {...showError, hasError:true, showErrMsg: err_razon_social } );
            return false;
        }

        if(condicion_venta.trim().length === 0 || condicion_venta === "Condición de venta")
        {
            setShowError( {...showError, hasError:true, showErrMsg: err_condicion_venta } );
            return false;
        }

        if(cuit.replace(/_|-|/gi, "" ).length < 10)
        {
            setShowError( {...showError, hasError:true, showErrMsg: err_cuit } );
            return false;
        }

        if(rubro.rubro.length === 0 || rubro.rubro === "Seleccione o busque un rubro")
        {
            setShowError( {...showError, hasError:true, showErrMsg: err_rubro } );
            return false;
        }

        return true;
    }     
          
    return (

        <div className="container-fluid row animate__animated animate__zoomIn base__mainContent">

            <div className="col-md-12 col-sm-12 col-xs-12">
                
                <form onSubmit = { handleNext }>              
                    
                    <Title text = { titles.Negocio } />

                    {showError.hasError && 
                            <div class="alert alert-danger text-center" role="alert">
                                    {showError.showErrMsg}
                            </div>
                    }
                    
                    <Input 

                        idValue = { "razon_social"  }                           
                        placeholderValue = { "Ingrese el nombre de su negocio"  }
                        labelValue = { "Razón social"}
                        typeValue = { "text" }
                        inputValue = { razon_social }
                        onChangeFunction = { setFormNegocio }    
                        
                    />                          

                    <Select2
                    
                        idValue = { "condicion_venta" }
                        inputValue = { condicion_venta }
                        onChangeFunction = { setFormNegocio  }
                        selectValues = { condicionVenta }
                        selectValueCondition = { "Condición de venta" }
                    />                            

                    {/* Input with mask */}
                    <div 
                        className="form-group col-lg-6"
                    >

                        <Label text = { "Cuit" } />

                        <InputMask

                            className = "form-control" 
                            placeholder = "Ingrese su número de cuit"
                            id = "cuit" 
                            name = "cuit"
                            value = { cuit }
                            onChange = { setFormNegocio }
                            mask = "99-99999999-9"

                          />                       
                       
                       <Span text = { "Ingrese los once dígitos sin espacios ni guiones" } />

                    </div>
                    
                    {/* Select with Search  */}
                    <div 
                        className="form-group col-lg-6"
                    >                      

                        <Label 
                            text = { "Seleccione una opción" }
                        />
                        
                       
                         <Select
                          isLoading={true}
                          placeholder = "Seleccione o busque un rubro"
                          options={ rubros }                           
                          id="rubro" 
                          name="rubro"                         
                          onChange = { updateRubro }
                        />                        
                                           
                    </div>           

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

export default FormNegocio
