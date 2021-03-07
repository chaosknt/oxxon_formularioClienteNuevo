import React, { useState } from 'react'
import condicionVenta from '../data/condicionVenta';
import rubros from '../data/rubro';
import Select from 'react-select'
import InputMask from "react-input-mask";

const FormNegocio = ({ razon_social, 
                       condicion_venta,
                       cuit,        
                       rubro,               
                       updateRubro,
                       setFormNegocio,                       
                       setBusiness, 
                       setContact
                    }) => {

    const [showError, setShowError] = useState({
        hasError: false,
        showErrMsg:''
    })

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
            setShowError({...showError, hasError:true, showErrMsg:"El campo Razon social es incorrecto."});
            return false;
        }

        if(condicion_venta.trim().length === 0 || condicion_venta === "Condición de venta")
        {
            setShowError({...showError, hasError:true, showErrMsg:"Debe elegir una condició de venta."});
            return false;
        }

        if(cuit.replace(/_|-|/gi, "" ).length < 10)
        {
            setShowError({...showError, hasError:true, showErrMsg:"El Cuit ingresado debe tener 11 (once) caracteres"});
            return false;
        }

        if(rubro.rubro.length === 0 || rubro.rubro === "Seleccione o busque un rubro")
        {
            setShowError({...showError, hasError:true, showErrMsg:"Debe elegir un rubro."});
            return false;
        }

        return true;
    }     
          
    return (

        <div className="container-fluid row animate__animated animate__zoomIn base__mainContent">
            <div className="col-md-12 col-sm-12 col-xs-12">
                
                <form onSubmit = { handleNext }>                
                    <h3 className="base__formTittle">Datos del negocio</h3>
                    <hr className="base__hr" /> 
                    {showError.hasError && 
                            <div class="alert alert-danger text-center" role="alert">
                                    {showError.showErrMsg}
                            </div>
                    }
                    
                    <div className="form-group col-lg-6">

                        <label 
                            className="control-label requiredField"                            
                        > Raz&oacute;n social
                            <span 
                                className="base__asteriskField"
                            >*
                            </span>
                        </label>

                        <input 
                            className="form-control"
                            id="razon_social" 
                            name="razon_social" 
                            placeholder="Ingrese el nombre de su negocio" 
                            type="text"
                            value = { razon_social }
                            onChange = { setFormNegocio }
                        />
                    
                    </div>                

                    <div 
                        className="form-group col-lg-6"
                    >

                        <label 
                            className="control-label requiredField"                           
                        >Seleccione una opci&oacute;n

                        <span 
                            className="base__asteriskField"
                        >*
                        </span>
                        </label>

                    <select 
                        className="select form-control" 
                        id="condicion_venta"
                        name="condicion_venta"
                        value = { condicion_venta }
                        onChange = { setFormNegocio }
                    >
                        {
                           condicionVenta.map(condicion => (                           
                               <option value = 
                               { condicion === "Condición de venta" ? 
                                                '' :
                                                 condicion 
                                                 }>
                                   { condicion }
                               </option>
                           )) 
                        }
                                      
                    </select>
                    </div>         

                    <div 
                        className="form-group col-lg-6"
                    >

                        <label 
                            className="control-label requiredField"
                           
                        >Cuit

                            <span 
                                className="base__asteriskField"
                            >*
                            </span>
                        </label>
{/*
                        <input 
                            className="form-control" 
                            id="cuit" 
                            name="cuit" 
                            placeholder="99999999999"
                            type="number"
                            value = { cuit }
                            onChange = { setFormNegocio }                            
/>*/}
                        <InputMask
                        className="form-control" 
                        placeholder="Ingrese su número de cuit"
                        id="cuit" 
                        name="cuit"
                        value = { cuit }
                        onChange = { setFormNegocio }
                        mask="99-99999999-9"
                        
                          />

                        

                        <span 
                            className="help-block" 
                            id="hint_number"
                        > Ingrese los once d&iacute;gitos sin espacios ni guiones
                        </span>
                    </div>

                    <div 
                        className="form-group col-lg-6"
                    >

                        <label 
                            className="control-label requiredField" 
                            for="rubro"
                        >Seleccione una opci&oacute;n
                        <span 
                            className="base__asteriskField"
                        >*
                        </span>
                        </label>
                       
                        
                         <Select
                          isLoading={true}
                          placeholder = "Seleccione o busque un rubro"
                          options={ rubros }                           
                          id="rubro" 
                          name="rubro"                         
                          onChange = { updateRubro }
                        />
                        

                    {/*<select 
                        className="select form-control" 
                        id="rubro"
                        name="rubro"
                        value = { rubro }
                        onChange = { setFormNegocio }
                    >
                        {
                           rubros.map(({value,label}) => (                           
                               <option value = 
                               { label
                                                 }>
                                   { value }
                               </option>
                           )) 
                        }                                      
                    </select>*/}
                        
                    </div>           

                    <div 
                        className="form-group col-lg-6"
                    >                        
                        <button 
                            className="btn btn-danger btn-block" 
                            name="submit"
                            type="submit"
                            value = "Siguiente"
                            disabled = { isFormValid }
                        >Siguiente
                        </button>
                        
                    </div>

                </form>
            </div>
        </div>

    )
}

export default FormNegocio
